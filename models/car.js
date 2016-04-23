'use strict';

var db = require('../config/db');
var uuid = require('uuid');

db.run('CREATE TABLE IF NOT EXISTS cars (id text, make text, model text, year integer)');

exports.create = function(car, cb) {
  // todo:  add validation
  db.serialize(function() {
    var stmt = db.prepare("INSERT INTO cars VALUES (?, ?, ?, ?)");
    stmt.run( uuid(), car.make, car.model, car.year );
    stmt.finalize(cb);
  });
};

exports.findAll = function(cb) {
  db.all('SELECT * FROM cars', function(err, cars) {
    cb(err, cars);
  });
};

