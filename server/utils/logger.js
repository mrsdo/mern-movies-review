/*
 * logger.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file is provides loading capabilities and a splash page while the
 * page content is loading.
 * ------------
 */
//create Middleware for logs

const logger = (req, res, next) =>{
  console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalURL}`);
  next();
}

module.exports = logger;