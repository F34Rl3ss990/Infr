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
  _id: {
    type: Number
  },
  address: {
    zip_code: {type: Number},
    city_: {type: String},
    street: {type: String},
    house_number: {type: Number}
  }
},{
  collection: 'customer'
});

Customer.plugin(autoIncrement.plugin, {
  model: 'Customer',
  field: '_id',
  startAt: 1,
  incrementBy: 1
});

module.exports = mongoose.model('Customer', Customer);
