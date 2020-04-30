const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;

let DVD = new Schema({
  title: {
    type: String
  },
  date_of_get: {
    type: Date
  },
  number_: {
    type: Number
  },
  State: {
    type: String
  }
},{
  collection: 'dvd'
});

autoIncrement.initialize(mongoose.connection);
DVD.plugin(autoIncrement.plugin, 'number_');
module.exports = mongoose.model('DVD', DVD);
