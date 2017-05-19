/**
 * Created by cz_jjq on 17-5-20.
 */

var util = require('util');

function Storage(opts){
    this._storage = null;

}

Storage.prototype.setItem = function(key, value){
    this._storage.setItem(key, value);
    return this;
};

Storage.prototype.getItem = function(key){
    return this._storage.getItem(key);
};

Storage.prototype.removeItem = function(key){
    this._storage.removeItem(key);
    return this;
};

Storage.prototype.clear = function(){
    this._storage.clear();
    return this;
};

Storage.prototype.length = function(){
    return this._storage.length;
};

Storage.prototype.key = function(idx){
    return this._storage.key(idx);
}

function LocalStorage(){
    Storage.call(this);
    this._storage = window.localStorage;
}

function SessionStorage(){
    Storage.call(this);
    this._storage = window.sessionStorage;
}

var localStorage = new LocalStorage();
var sessionStorage = new SessionStorage();

module.exports = function(opts){
    var ret = localStorage;

    if(opts){
        switch (opts.type){
            case "session-storage":
                ret = sessionStorage;
                break;
        }
    }

    return ret;

};