const express = require('express');
const app = express();
const connectionRoutes = express.Router();

let Connection = require('../models/Connection');



// Defined store route
connectionRoutes.route('/add').post(function (req, res) {
  let connection = new Connection(req.body);
  connection.save()
    .then(connection => {
      res.status(200).json({'connection': 'business in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});


// Defined get data(index or listing) route
connectionRoutes.route('/').get(function (req, res) {
  Connection.find(function (err, connection){
    if(err){
      console.log(err);
    }
    else {
      res.json(connection);
    }
  });
});

// Defined edit route
connectionRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Connection.findById(id, function (err, connection){
    res.json(connection);
  });
});

//  Defined update route
connectionRoutes.route('/update/:id').post(function (req, res) {
  Connection.findById(req.params.id, function(err, next, connection) {
    if (!connection)
      return next(new Error('Could not load Document'));
    else {
      connection.//person_name = req.body.person_name;
      connection.//business_name = req.body.business_name;
      connection.//business_gst_number = req.body.business_gst_number;

      connection.save().then(connection => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
connectionRoutes.route('/delete/:id').get(function (req, res) {
  Connection.findByIdAndRemove({_id: req.params.id}, function(err, connection){
    if(err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = connectionRoutes;
