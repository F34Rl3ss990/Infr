const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Customer = require('./Customer');
let DVD = require('./DVD');

let Connection = new Schema({
  ID_Number: {
    type: String
  },
  title: [{
    type: String
  }],
  date_of_borrow: {
    type: Date
  },
  delay: {
    type: Number
  },
  person_name:{
    type: String
  },
  phone_number:{
    type: Number
  }
},{
  collection: 'connection'
});


module.exports = mongoose.model('Connection', Connection);
