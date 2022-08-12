const { ObjectID } = require('bson');
var express = require('express');
var mysql = require('mysql2');
const fs = require('fs');

//router object
var router = express.Router();
var MongoClient=require('mongodb').MongoClient
router.get('/', function(req, res){
  let proId=req.query.id
  let procat=req.query.category
  console.log(proId)
  console.log(procat)
  proId=ObjectID(proId)
  let t="hello"
  console.log(t)

  MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
  var dbo = db.db("shop");
  if (procat==='1'){
    dbo.collection("ladieswear").findOne({_id:proId}, function(err, result) {
      if (err) throw err;
      console.log(result);
      console.log(result.files)
      dbo.collection("cart").insertOne(result, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      })
    })
  }else if(procat==='2'){
    dbo.collection("kidsgirlwear").findOne({_id:proId}, function(err, result) {
      if (err) throw err;
      console.log(result);
      console.log(result.files)
      dbo.collection("cart").insertOne(result, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      })
    })
  }else if(procat==='3'){
    dbo.collection("kidsboywear").findOne({_id:proId}, function(err, result) {
      if (err) throw err;
      console.log(result);
      console.log(result.files)
      dbo.collection("cart").insertOne(result, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      })
    })
  }else if(procat==='4'){
    dbo.collection("gentswear").findOne({_id:proId}, function(err, result) {
      if (err) throw err;
      console.log(result);
      console.log(result.files)
      dbo.collection("cart").insertOne(result, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      })
    })
  }else if(procat==='5'){
    dbo.collection("fashion").findOne({_id:proId}, function(err, result) {
      if (err) throw err;
      console.log(result);
      console.log(result.files)
      dbo.collection("cart").insertOne(result, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      })
    })
  }else if(procat==='6'){
    dbo.collection("footwear").findOne({_id:proId}, function(err, result) {
      if (err) throw err;
      console.log(result);
      console.log(result.files)
      dbo.collection("cart").insertOne(result, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      })
    })
  }
  })

  })

module.exports = router;