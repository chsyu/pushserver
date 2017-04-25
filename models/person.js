var mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@ds047325.mongolab.com:47325/username');

var Schema = mongoose.Schema;

// Define Schema
var personSchema = new Schema({
  firstname : String,
  lastname  : String,
  age       : Number,
  occupation: String
});

module.exports = mongoose.model('Person', personSchema);
