const express = require('express');
const app = express();
const connectionRoutes = express.Router();

let Connection = require('../models/Connection');



// Defined store route
connectionRoutes.route('/ConnectionAdd').post(function (req, res) {
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
connectionRoutes.route('/getConnection').get(function (req, res) {
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
connectionRoutes.route('/editConnection/:id').get(function (req, res) {
  let id = req.params.id;
  Connection.findById(id, function (err, connection){
    res.json(connection);
  });
});

//  Defined update route
connectionRoutes.route('/updateConnection/:id').post(function (req, res, next) {
  console.log("asd")

  Connection.findByIdAndUpdate(req.params.id, {$push: {dvd: req.body}},
    {safe: true, upsert: true}, function (err, connection) {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    console.log(req.body)
    return res.json(connection);

  });
});

connectionRoutes.route('/bringBack/asd/:id').post(function (req, res, next) {
  console.log("asd")
  console.log(req.body)

  Connection.findByIdAndUpdate(req.params.id, {$pull: {dvd: req.body}},
    {safe: true, upsert: true}, function (err, connection) {
      if (err) {
        console.log(err);
        return res.send(err);
      }
      console.log(req.body)
      return res.json(connection);

    });
});

connectionRoutes.route('/bringBack/asd/:id').post(function (req, res, next) {
  console.log("asd")
  console.log(req.body)
  var i = req.body._id;
  console.log(i)
  Connection.update({_id: req.params.id},
    {$pull: {dvd: {i}}},
    {safe: true}, function (err, connection) {
      if (err) {
        console.log(err);
        return res.send(err);
      }
      console.log(req.body)
      return res.json(connection);

    });
});

/*connectionRoutes.route('/bringBack/:id').post(function (req, res, next) {
  console.log("asd")
  console.log(req.body)
  Connection.findByIdAndRemove(req.params.id, {pull: {dvd: req.body}},
    {safe: true, upsert: true}, function (err, connection) {
      if (err) {
        console.log(err);
        return res.send(err);
      }
      console.log(req.body)
      return res.json(connection);

    });
});*/
/*connectionRoutes.route('/updateConnection/:id').post(function (req, res, next) {
  console.log("asd")
  console.log(req.body)
  Connection.findById(req.params.id, function(err, connection) {
    if (!connection)
      return next(new Error('Could not load Document'));
    else {
      connection.push()
        .then(connection => {
          res.status(200).json({'connection': 'business in added successfully'});
        })
        .catch(err => {
          res.status(400).send("unable to save to database");
        });
    }
  });
});*/

// Defined delete | remove | destroy route
connectionRoutes.route('/deleteConnection/:id').get(function (req, res) {
  Connection.findByIdAndRemove({_id: req.params.id}, function(err, connection){
    if(err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = connectionRoutes;
