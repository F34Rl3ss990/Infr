const express = require('express');
const app = express();
const customerRoutes = express.Router();

let Customer = require('../models/Customer');


// Defined store route
customerRoutes.route('/Customeradd').post(function (req, res) {
  console.log(req.body);
  let customer = new Customer(req.body);
  customer.save().then(customer => {
      res.status(200).json({'customer': 'customer in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
customerRoutes.route('/getCustomer').get(function (req, res) {
  Customer.find(function (err, customer){
    if(err){
      console.log(err);
    }
    else {
      res.json(customer);
    }
  });
});

//Get Customer by ID
customerRoutes.route('/getCustomer/:id').get(function (req, res) {
  let id = req.params.id;
  console.log(id)
  Customer.findById(id,function (err, customer){
    if(err) res.json(err);
    else
      res.json(customer);
  });
});

// Defined edit route
customerRoutes.route('/editCustomer/:id').get(function (req, res) {
  let id = req.params.id;
  console.log(id)
  Customer.findById(id,function (err, customer){
    if(err) res.json(err);
    else
    res.json(customer);
  });
});

customerRoutes.route('/getCustomer/delete/:id').get(function (req, res) {
  Customer.findByIdAndRemove({_id: req.params.id}, function(err, customer){
    if(err) res.json(err);
    else res.json('Successfully removed');
  });
});

//  Defined update route
customerRoutes.route('/Customerupdate/:id').post(function (req, res, next) {
  Customer.findById(req.params.id, function(err, customer) {
    if (!customer)
      return next(new Error('Could not load Document'));
    else {

        customer.person_name = req.body.person_name;
        customer.phone_number = req.body.phone_number;
        customer.ID_Number = req.body.ID_Number;
        customer.address.zip_code = req.body.address.zip_code;
        customer.address.city_ = req.body.address.city_;
        customer.address.street = req.body.address.street;
        customer.address.house_number = req.body.address.house_number;
        customer.save().then(customer => {
        res.json('Update complete');

      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});




module.exports = customerRoutes;
