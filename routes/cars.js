'use strict';

var express = require('express');
var router = express.Router();

//   /api/cars
router.get('/', (req, res) => {
  res.send('all cars');
});


module.exports = router;
