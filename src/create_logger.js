var path = require('path')
  , winston = require('winston')
  , loadYamlFile = require('./load_yaml_file')
  , Papertrail = require('winston-papertrail').Papertrail

module.exports = function(loggerConfig) {

  var papertrailTransport = function() {
    return new Papertrail({
      host: loggerConfig.papertrail.host,
      port: loggerConfig.papertrail.port,
      hostname: require('os').hostname(),
      program: require('path').basename(process.argv[1]),
      logFormat: function(level, message) {
        return level+': '+message
      }
    })
  }

  var consoleColorTransport = function() {
    return new winston.transports.Console({
      colorize: true
    })
  }

  var transports = []
  if (process.env.NODE_ENV === 'production') {
    console.log('Logging to papertrail!')
    transports.push(papertrailTransport())
  } else if (process.env.NODE_ENV === 'test') {
    // no logger in test
  } else {
    transports.push(consoleColorTransport())
  }

  return new winston.Logger({
    transports: transports,
    levels: {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3
    }
  })
}
