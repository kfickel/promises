/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
var http = require('https');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', function(err, contents) {
    if (err) {  
      callback(err, null);
    } else {
      const lines = contents.split("\n");
      callback(err, lines[0]);
    }
  });

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  http.get(url, function(res) {
    const {statusCode} = res;
    let error;
    if ({statusCode} !== 200) {
      error = new Error('Request failed');
      callback(error, `${statusCode}`);
    } else {
      callback(error, `${statusCode}`);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
