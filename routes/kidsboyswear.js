var express = require('express');
var mysql = require('mysql2');
//router object
var router = express.Router();
var MongoClient=require('mongodb').MongoClient
router.get('/', function(req, res){
    MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
  var dbo = db.db("shop");
  dbo.collection("kidsboyswear").find({}).toArray(function(err, result) {
    if (err) throw err;
    product=result
    console.log(result);
    res.render('kidsboyswear', {product});
    db.close();
  })
});
})
module.exports = router;