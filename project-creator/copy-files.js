/**
 * Created by jjq on 6/2/17.
 */

//https://www.npmjs.com/package/cpy
const cpy = require('cpy');
const fs = require('fs');
const path = require('path');

let Handlebars = require('handlebars');

module.exports = function(appPath, hbsContext){

    let hbsTemplate = fs.readFileSync(path.resolve(__dirname,'./templates/copy-files.hbs'),'utf-8');

//预编译模板
    let template = Handlebars.compile(hbsTemplate);

    let sourceFiles = JSON.parse(template(hbsContext));

    //cpy(['src/*.png', '!src/goat.png'], appPath).then(() => {
    cpy(sourceFiles, appPath,{parents : true}).then(() => {
        console.log('files copied');
    });
};