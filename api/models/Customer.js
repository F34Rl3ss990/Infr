const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

let Customer = new Schema({
  person_name: {
    type: String
  },
  phone_number: {
    type: Number
  },
  ID_Number: {
    type: String
  },
  address: {
    zip_code: {type: Number},
    city: {type: String},
    street: {type: String},
    house_number: {type: Number}
  },
  status: {
    type: String
  }
},{
  collection: 'customer'
});

autoIncrement.initialize(mongoose.connection);
Customer.plugin(autoIncrement.plugin, 'number_');
module.exports = mongoose.model('Customer', Customer);
