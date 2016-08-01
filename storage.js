var lo = require('lodash');
var fs = require('fs');
var s3 = require('./s3.js');

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
    if (options.storageRoute === 's3') {
        return getS3();
    } else if (options.storageRoute === 'local') {
        return getLocal();
    }
}

function init(options) {
    if (options.s3) {
        s3.init({
            bucket: 'log'
        });
        options.storageRoute = 's3';
    } else {
        options.storageRoute = 'local';
    }
    return true;
}

function getS3(data, callback) {
    s3.getObject(data, callback);
}

function getLocal() {

}

function storeS3(data, callback) {
    s3.addObject(data, callback);
}

function storeLocal(data) {

}
