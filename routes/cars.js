'use strict';

var express = require('express');
var router = express.Router();

var Car = require('../models/car');

//   /api/cars
router.get('/', (req, res) => {
  Car.findAll(function(err, cars) {
    if(err) return res.status(400).send(err);
    res.send(cars);
  });
});

//  POST  /api/cars
router.post('/', (req, res) => {
  Car.create(req.body, err => {
    if(err) return res.status(400).send(err);
    res.send();
  });
});

module.exports = router;
