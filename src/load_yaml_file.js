var jsyaml = require('js-yaml')
var fs = require('fs')

module.exports = function(yamlPath) {
  var config = jsyaml.load(fs.readFileSync(yamlPath)) 
  return config;
}
