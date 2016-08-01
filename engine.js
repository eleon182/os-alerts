module.exports = {
    display: display,
    writeToFile,
    writeFile,
    getHistory: getHistory,
    addToHistory: addToHistory
};

var history = [];
var fileName = 'alert_history';

function getHistory(){
    return history;
}

function display(msg, level) {
    debug('Alert: ' + msg + ' / Level: ' + level);
}

function writeToFile() {
    fs.writeFile(fileName, JSON.stringify(history), function(err) {
        if (err) console.log(err);
    });
}

function addToHistory(msg, options, level) {
    history.push({
        msg: msg,
        options: options,
        level: level
    });
    writeFile();
}
