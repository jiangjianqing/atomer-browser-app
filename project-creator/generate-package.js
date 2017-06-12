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
    ret.private = atomConfig.private;
    if (atomConfig.bin){
	  ret.lib = true;
	  ret.bin = true;
	}
	if (!ret.lib){
	  ret[atomConfig.builder] = true;
	  if(atomConfig.builder === "browserify"){
		ret.babel = true;
	  }
	}else{
	  ret.babel = true;
	}



    var fwSupportList = ["page" , "director" , "react" , "vue" ];
    if(atomConfig.frameworks){
	  fwSupportList.forEach(function(fw){
		if (atomConfig.frameworks.indexOf(fw) > -1){
		  ret[fw] = true;
		}
	  });
	}

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
    }

    console.log(atomConfig);

    let packageTemplate = fs.readFileSync(path.resolve(__dirname,'./templates/package.hbs'),'utf-8');

//预编译模板
    let template = Handlebars.compile(packageTemplate);

    let hbsContext = generateHbsObj(atomConfig);
//匹配json内容
    let pkgObj = JSON.parse(template(hbsContext));

    let isPkgExist = false;

    if (pkgFilePath){
        let oldPkgObj = {};
        //对已有的package.json进行保护，其他文件的处理也会依赖该部分结果
        if (fs.existsSync(pkgFilePath)){
            oldPkgObj = require(path.resolve(pkgFilePath));
            isPkgExist = true;
            //delete pkgObj.version;  // keep version
            delete pkgObj.private;  //keep private
            //delete pkgObj.output;  //keep output
            delete oldPkgObj.scripts; //update scripts
            delete oldPkgObj.devDependencies; //update devDependencies
            pkgObj = Object.assign({},pkgObj, oldPkgObj);
        }

        saveFile(pkgFilePath, JSON.stringify(pkgObj,null,'\t'));
    }

    return {
        "isPkgExist" : isPkgExist,
        "pkg" : pkgObj,
        "atomConfig" : atomConfig,
        "hbsContext" : hbsContext
    };
};



