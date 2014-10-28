var logger = require('./')({
  logger: (process.env.PT_HOST ? {
    papertrail: {
      host: process.env.PT_HOST,
      port: process.env.PT_PORT
    }
  } : null )
}).logger;

logger.info('stuff')

throw new Error('awfwef')

logger.info('test')
