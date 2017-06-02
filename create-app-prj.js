/**
 * Created by jjq on 6/2/17.
 */

var creater = require('./app-creator');
let fs = require('fs');

if(process.argv.length < 3){
    console.log("Please input a target app path first! (base on cwd)");
    process.exit(-1)
}

let appPath = process.argv[2];
appPath = appPath.endsWith('/') ? appPath.substring(0,appPath.length - 1) : appPath;

if (!fs.existsSync(appPath)){
    console.log(`Target app path must exist! (${appPath})`);
    process.exit(-1)
}

var ret = creater.generatePackage(appPath);
let hbsContext = ret.hbsContext;
creater.copyFiles(appPath, hbsContext);



