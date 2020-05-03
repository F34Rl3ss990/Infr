const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Connection = new Schema({
  customer: {},
  dvd: [{
    dateOfBorrow: {type: Number, default: Date.now},
    title: String,

  }]
},{
  collection: 'connection'
});


module.exports = mongoose.model('Connection', Connection);
