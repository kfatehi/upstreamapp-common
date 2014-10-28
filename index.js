module.exports = function(config) {
  var config = config || {};
  var logger = require('./src/create_logger')(config.logger)

  return {
    logger: logger,
    cluster: require('./src/cluster')(logger),
    loadYamlFile: require('./src/load_yaml_file')
  }
}
