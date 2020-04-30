const express = require('express');
//const app = express();
const DVDRoutes = express.Router();

let DVD = require('../models/DVD');

// Defined store route
DVDRoutes.route('/addDVD').post(function (req, res) {
  let dvd = new DVD(req.body);
  dvd.save()
    .then(dvd => {
      res.status(200).json({'DVD': 'DVD added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
/*
// Defined get data(index or listing) route
DVDRoutes.route('/').get(function (req, res) {
  DVD.find(function (err, dvd){
    if(err){
      console.log(err);
    }
    else {
      res.json(dvd);
    }
  });
});
*/
// Defined edit route
DVDRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  DVD.findById(id, function (err, dvd){
    res.json(dvd);
  });
});
/*
//  Defined update route
DVDRoutes.route('/update/:id').post(function (req, res) {
  DVD.findById(req.params.id, function(err, next, dvd) {
    if (!dvd)
      return next(new Error('Could not load Document'));
    else {
      dvd.//person_name = req.body.person_name;
      dvd.//business_name = req.body.business_name;
      dvd.//business_gst_number = req.body.business_gst_number;

        dvd.save().then(dvd => {
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
DVDRoutes.route('/delete/:id').get(function (req, res) {
  DVD.findByIdAndRemove({_id: req.params.id}, function(err, dvd){
    if(err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = DVDRoutes;
