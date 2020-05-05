const express = require('express');
const app = express();
const connectionRoutes = express.Router();

let Connection = require('../models/Connection');



// Defined store route
connectionRoutes.route('/ConnectionAdd').post(function (req, res) {
  let connection = new Connection(req.body);
  console.log(req.body)
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
connectionRoutes.route('/updateConnectionWithDVD/:id').post(function (req, res, next) {
  console.log("dvdtocon")
  Connection.findByIdAndUpdate(req.params.id, {$push: {dvd: req.body}},
    {safe: true, upsert: true}, function (err, connection) {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    console.log("asd")
    console.log(req.body)
      console.log("asd")
    return res.json(connection);

  });
});
/*
connectionRoutes.route('/deleteCustomerFromConnection/asd/:id').post(function (req, res, next) {
  console.log("ez az a method")
  console.log(req.body.customer.id)
  var i = req.body.customer.id
  Connection.updateOne({i},
    {$unset: {customer:{first_name: 1}}},
    {safe: true}, function (err, connection) {
      if (err) {
        console.log(err);
        return res.send(err);
      }
      connection.set
      console.log(req.body)
      return res.json(connection);

    });
});
*/
/*
connectionRoutes.route('/updateConnectionWithCustomer/:id').post(function (req, res, next) {
  Connection.findByIdAndUpdate(req.params.id, {$push: {customer: req.body}},
    {safe: true, upsert: true}, function (err, connection) {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    console.log(req.body)
    return res.json(connection);

  });
});
*/
connectionRoutes.route('/updateConnectionWithCustomer/asd/asd/:id').post(function (req, res, next) {
console.log("akármi")
  Connection.findOneAndUpdate({_id: req.params.id},{$set:{customer: req.body.customer}},
    (err, connection)=> {
    console.log("itt kezdődik")
    console.log(req.params.id)
    console.log(req.body)
      console.log(connection)
    if (err) {
      return next(new Error('Could not load Document'));
    }
    else {
res.json('Update complete')
      console.log(connection)
    }
  });
});
/*
connectionRoutes.route('/updateConnectionWithCustomer/asd/asd/:id').post(function (req, res, next) {
  Connection.findById(req.params.id, function (err, connection) {
    console.log("itt kezdődik")
    console.log(req.params.id)
    console.log(req.body)
    if (!connection)
      return next(new Error('Could not load Document'));
    else {
      console.log(connection)
      console.log(connection.customer.first_name)
      console.log(req.body.customer.first_name)
      connection.customer.first_name = req.body.customer.first_name;
      connection.customer.last_name = req.body.customer.last_name;
      connection.customer.phone_number = req.body.customer.phone_number;
      connection.customer.ID_Number = req.body.customer.ID_Number;
      console.log(connection.customer.first_name)
      connection.save().then(connection => {
        res.json('Update complete');
      console.log(connection)
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
      console.log(connection)
    }
    console.log(connection)
  });
});
*/
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
