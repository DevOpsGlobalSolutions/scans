var index = require(__dirname + '/index.js');

module.exports = function(AWSConfig, collection, callback) {
	index('getBucketPolicy', false, AWSConfig, collection, callback);
};