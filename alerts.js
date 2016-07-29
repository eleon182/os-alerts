var lo = require('lodash');
var fs = require('fs');
var debug = require('debug')('main');

module.exports = {
    debug: debug,
    error: error,
    displayHistory: displayHistory,
    getHistory: getHistory
};

var history = [];
var fileName = 'alert_history';

function getHistory(){
    return history;
}

function displayHistory(){
    history.forEach(function(val){
        display(val.msg);
    });
}

function display(msg, level){
    debug('Alert: ' + msg + ' / Level: ' + level);
}

function writeToFile(){
    fs.writeFile(fileName, JSON.stringify(history), function(err){
        if(err)  console.log(err);
    });
}

function addToHistory(msg, options, level){
    history.push({
        msg: msg,
        options: options,
        level: level
    });
    writeFile();
}

function debug(msg, options){
    addToHistory(msg, options, 1);
    display(msg);
}

function error(msg, options){
    addToHistory(msg, options, 2);
    display(msg);
}

