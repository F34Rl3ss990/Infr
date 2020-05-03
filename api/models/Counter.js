const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let CounterSchema = new Schema({
  _id: {type: String, required: true},
  seq: { type: Number, default: 0 }
},{
  collection: 'dvd'
});
module.exports = mongoose.model('CounterSchema', CounterSchema);
