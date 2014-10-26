module.exports = function(config) {
  var logger = config ? require('./src/create_logger')(config.logger) : null

  return {
    logger: logger,
    cluster: require('./src/cluster')(logger),
    loadYamlFile: require('./src/load_yaml_file')
  }
}
