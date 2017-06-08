/**
 * Created by jjq on 6/2/17.
 */

let fs = require('fs');
let path = require('path');
let Handlebars = require('handlebars');

let saveFile = require('./save-file');

let generateHbsObj = function(atomConfig){

    let ret = {};
    ret.name = atomConfig.name;
    ret.version = atomConfig.version;
    ret.lib = atomConfig.lib;
    ret[atomConfig.builder] = true;
    var fwSupportList = ["page" , "director" , "react" , "vue" ];
    fwSupportList.forEach(function(fw){
        if (fw in atomConfig.frameworks){
            ret[fw] = true;
        }
    });
    return ret;
};

let mergePkgFile = function(){

};

module.exports = function(appPath){
    let atomConfigFilePath = appPath + "/atom.json";
    let atomConfig;
    let pkgFilePath;
    if(fs.existsSync(atomConfigFilePath)){
        atomConfig = JSON.parse(fs.readFileSync(atomConfigFilePath,'utf-8'));
        pkgFilePath = appPath + "/package.json";
    }else{
        atomConfig = require('./app-atom-example');
    }

    console.log(atomConfig);

    let packageTemplate = fs.readFileSync(path.resolve(__dirname,'./templates/package.hbs'),'utf-8');

//预编译模板
    let template = Handlebars.compile(packageTemplate);

    let hbsContext = generateHbsObj(atomConfig);
//匹配json内容
    let pkgObj = JSON.parse(template(hbsContext));

    if (pkgFilePath){
        saveFile(pkgFilePath, JSON.stringify(pkgObj,null,'\t'));
    }

    return {
        "pkg" : pkgObj,
        "atomConfig" : atomConfig,
        "hbsContext" : hbsContext
    };
};



