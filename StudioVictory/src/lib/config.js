'use strict';

var fs = require('fs');
var yaml = require('js-yaml');
var _ = require('lodash');
var enviroment = require('./environment');
var config = yaml.safeLoad(fs.readFileSync(__dirname + '/../config/config.yml', 'utf-8'));

module.exports = function(){
  return config[enviroment().name] || {};
};
