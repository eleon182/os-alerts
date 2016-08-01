var AWS = require('aws-sdk');
AWS.config.region = 'us-west-2';

module.exports = {
    init: init,
    addObject: addObject,
    getObject: getObject
};

var s3bucket = null;
var params = null;

function init(options) {
    params = options;
    s3bucket = new AWS.S3({
        params: {
            Bucket: options.bucket
        }
    });
}

function addObject(data, callback) {
    var params = {
        Key: data.key
        Body: data.body
    };

    s3bucket.upload(params, callback);
}

function getObject(data, callback) {
    var params = {
        Bucket: params.bucket,
        Key: data.key,
    };
    s3.getObject(params, callback);
}
