/**
 * Created by jjq on 6/2/17.
 */
var colors = require('colors');

// set theme
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

var creater = require('./project-creator');
let fs = require('fs');

if(process.argv.length < 3){
    console.log(colors.error("Please input a target app path first! (base on cwd)"));
    process.exit(-1)
}

let appPath = process.argv[2];
appPath = appPath.endsWith('/') ? appPath.substring(0,appPath.length - 1) : appPath;

if (!fs.existsSync(appPath)){
    console.log(`Target app path must exist! (${appPath})`);
    process.exit(-1)
}

var ret = creater.generatePackage(appPath);
if (ret.isPkgExist){
    console.log(colors.warn("Warning:Dest package.json is exist, just update it ,other operations are ignored!"));
}else{
    let hbsContext = ret.hbsContext;
    creater.copyFiles(appPath, hbsContext);
    creater.generateTravis(appPath, hbsContext);
}




