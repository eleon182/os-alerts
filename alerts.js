var lo = require('lodash');
var fs = require('fs');
var debug = require('debug')('main');
var engine = require('./engine.js');

module.exports = {
    debug: debug,
    error: error,
    displayHistory: displayHistory,
    getHistory: getHistory,
};

function getHistory() {
    return engine.getHistory();
}

function displayHistory() {
    engine.getHistory().forEach(function(val) {
        display(val.msg);
    });
}

function debug(msg, options) {
    engine.addToHistory(msg, options, 1);
    display(msg);
}

function error(msg, options) {
    engine.addToHistory(msg, options, 2);
    display(msg);
}
