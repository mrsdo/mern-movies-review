const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.send('This is the Movies Router');

});

module.exports = router;