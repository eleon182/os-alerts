var lo = require('lodash');
var debug = require('debug')('main');

module.exports = {
    debug: debug,
    error: error,
    displayHistory: displayHistory,
    getHistory: getHistory
};

var history = [];

function getHistory(){
    return history;
}

function displayHistory(){
    history.forEach(function(val){
        display(val.msg);
    });
}

function display(msg, level){
    debug(msg);
}

function addToHistory(msg, options, level){
    history.push({
        msg: msg,
        options: options,
        level: level
    });
}

function debug(msg, options){
    addToHistory(msg, options, 1);
    display(msg);
}

function error(msg, options){
    addToHistory(msg, options, 2);
    display(msg);
}

