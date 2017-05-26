/**
 * Created by cz_jjq on 17-5-25.
 */
const util = require('util');
const path = require('path');
const fs = require('fs');

var jsonFile = './atom.json';
if (process.argv.length > 2){
    jsonFile = process.argv[2];
    if (!fs.existsSync(jsonFile)){
        console.log(`[${jsonFile}]文件不存在`);
        process.exit(1);
    }
}
let weaver = require(jsonFile);
if (!util.isArray(weaver["business-entries"])){
    console.log(`指定的 [${jsonFile}]不包含business-entries`);
    return;
}

const entries = weaver["business-entries"].sort(function(a,b){
    return a.sn > b.sn;
});

let entryFileName = path.resolve('./src/layouts/business-entries.js');

var out = fs.createWriteStream(entryFileName);
const banner = `
/**
 * Automately created by atomer.
 */
`;

out.write(banner);



function outputEntriesDefine(out, entries){
    out.write('let entries = [\n');
    entries.forEach(function(entry,idx){
        out.write('\t');
        out.write(JSON.stringify(entry,null,"\t"));
        if(idx !== entries.length){
            out.write(',');
        }
        out.write('\n');
    });
    out.write('];\n');
    out.write('module.exports = entries;\n\n');
}

function outputVueComponentRegist(out, entries){
    out.write("let Vue = require('vue').default;\n\n");
    entries.forEach(function(entry,idx){
        let comPath = entry["component-path"];
        if (!comPath.match(/^@/)){  //这里需要注意：使用本地目录后可能会导致在不同pc上的不兼容，所以每次新获取后都要重新weave一下
            comPath = path.resolve('./src/' + comPath);
        }
        out.write(`Vue.component('${entry.name}', require('${comPath}'));\n`);

    });
}

outputEntriesDefine(out, entries);
outputVueComponentRegist(out, entries);