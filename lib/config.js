var Config = exports;
var fs = require('fs');

var readConfig = function(){
  return JSON.parse(fs.readFileSync(__dirname + '/../config/twitter.json'));
};

Config.username = function(){
  return readConfig()[0];
};

Config.password = function(){
  return readConfig()[1];
};
