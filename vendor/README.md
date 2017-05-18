#用于存放第三方库（没有npm支持的时候使用）
b.require(file, opts)
Use the expose property of opts to specify a custom dependency name. require('./vendor/angular/angular.js', {expose: 'angular'}) enables require('angular')


b.external(file)

Prevent file from being loaded into the current bundle, instead referencing from another bundle.