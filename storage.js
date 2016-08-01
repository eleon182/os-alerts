var lo = require('lodash');
var fs = require('fs');

module.exports = {
    init: init,
    store: store,
    get: get
};

var options = {
    storageRoute: null
};

function store(data) {

}

function get() {
    if(options.storageRoute === 's3'){
        return getS3();
    }
    else if(options.storageRoute === 'local'){
        return getLocal();
    }
}

function init(options) {
    return true;
}

function getS3() {

}

function getLocal() {

}

function storeS3(data) {

}

function storeLocal(data) {

}
