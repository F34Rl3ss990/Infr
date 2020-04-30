const express = require('express');
const app = express();
const customerRoutes = express.Router();

let Customer = require('../models/Customer');

// Defined store route
customerRoutes.route('/add').post(function (req, res) {
  let customer = new Customer(req.body);
  customer.save()
    .then(customer => {
      res.status(200).json({'customer': 'customer in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
/*
// Defined get data(index or listing) route
customerRoutes.route('/').get(function (req, res) {
  Customer.find(function (err, customer){
    if(err){
      console.log(err);
    }
    else {
      res.json(customer);
    }
  });
});
*/
// Defined edit route
customerRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Customer.findById(id, function (err, customer){
    res.json(customer);
  });
});
/*
//  Defined update route
customerRoutes.route('/update/:id').post(function (req, res) {
  Customer.findById(req.params.id, function(err, next, customer) {
    if (!customer)
      return next(new Error('Could not load Document'));
    else {
      customer.//person_name = req.body.person_name;
      customer.//business_name = req.body.business_name;
      customer.//business_gst_number = req.body.business_gst_number;

        customer.save().then(customer => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});
*/
// Defined delete | remove | destroy route
customerRoutes.route('/delete/:id').get(function (req, res) {
  Customer.findByIdAndRemove({_id: req.params.id}, function(err, customer){
    if(err) res.json(err);
    else res.json('Successfully removed');
  });
});


module.exports = customerRoutes;
