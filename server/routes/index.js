/*
 * pageName.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file is provides loading capabilities and a splash page while the
 * page content is loading.
 * ------------
 */

var express = require('express');
var indexRouter = express.Router();

/* GET users listing. */
indexRouter.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = indexRouter;