/**
 * Created by jjq on 6/2/17.
 */

let fs = require('fs');
let path = require('path');
let Handlebars = require('handlebars');

let saveFile = require('./save-file');

module.exports = function(appPath, hbsContext){

    let packageTemplate = fs.readFileSync(path.resolve(__dirname,'./templates/travis.hbs'),'utf-8');

//预编译模板
    let template = Handlebars.compile(packageTemplate);

    let str = template(hbsContext);

    let filePath = appPath + "/.travis.yml";

    saveFile(filePath, str);
};



