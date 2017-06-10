/**
 * Created by cz_jjq on 17-6-10.
 */
let debug = require('debug');
const log = debug('app:log');

let EnvIniter = require('atomer-common-lib').EnvIniter;

let initer = new EnvIniter();

initer.configureProduction(function(){
  debug.disable();
});

initer.configureDevelopment(function(){
	// Enable the logger.
  debug.enable('*');
  log('init : 当前处于生产环境,Logging is enabled!');
});

initer.init(NODE_ENV);