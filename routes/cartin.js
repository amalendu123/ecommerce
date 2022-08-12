var express = require('express');
var router = express.Router();
var MongoClient=require('mongodb').MongoClient
/* GET home page. */
router.get('/', function(req, res, next) {
    MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
  var dbo = db.db("shop");
  dbo.collection("cart").find({}).toArray(function(err, result) {
    if (err) throw err;
    product=result
    console.log(result);
    res.render('cart', {result});
    db.close();
  });
});
});

module.exports = router;
