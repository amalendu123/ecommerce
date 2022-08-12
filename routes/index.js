var express = require('express');
const { Db } = require('mongodb');
var router = express.Router();


var MongoClient=require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/su',function(req,res){
  x=req.body
  console.log(x)
  
  MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
  var dbo = db.db("shop");
  dbo.collection("users").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
    if(x.email===result.mail){
      if(x.passowrd===result.password){
        res.render('owner', { title: 'Express' });
      }
    }
  });
});
 

})
router.post('/a',function(req,res){
  console.log("hello")
  console.log(req.files.myfile)
  x=req.body
  console.log(x)
  

  MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
  var dbo = db.db("shop");
  if (x.category==='1'){
    data={name:x.item[0],price:x.item[1]}
    console.log("hii")
    dbo.collection("ladieswear").insertOne(data, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    dbo.collection("ladieswear").findOne({name:x.item[0]}, function(err, result) {
        if (err) throw err;
        console.log(result);
        let image=req.files.myfile
        id=result._id
        image.mv('./public/ladieswear/'+id+'.jpg',function(err,done){
                    console.log("done")
        })
    })
  })
}
  else if(x.category==='2'){
      data={name:x.item[0],price:x.item[1],image:x.avatar}
      console.log("hii2")
      dbo.collection("kidsgirlwear").insertOne(data, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
        dbo.collection("kidsgirlwear").findOne({name:x.item[0]}, function(err, result) {
          if (err) throw err;
          console.log(result);
          let image=req.files.myfile
          id=result._id
          image.mv('./public/kidsgirlwear/'+id+'.jpg',function(err,done){
                      console.log("done")
          })
      })
    }) 
  }
  else if(x.category==='3'){
    console.log("hii2")
    data={name:x.item[0],price:x.item[1],image:x.avatar}
      dbo.collection("kidsboywear").insertOne(data, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close()
        dbo.collection("kidsboywear").findOne({name:x.item[0]}, function(err, result) {
          if (err) throw err;
          console.log(result);
          let image=req.files.myfile
          id=result._id
          image.mv('./public/kidsboywear/'+id+'.jpg',function(err,done){
                      console.log("done")
          })
      })
      })
      }
      else if(x.category==='4'){
        console.log("hii4")
        data={name:x.item[0],price:x.item[1],image:x.avatar}
      dbo.collection("gentswear").insertOne(data, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close()
        dbo.collection("gentswear").findOne({name:x.item[0]}, function(err, result) {
          if (err) throw err;
          console.log(result);
          let image=req.files.myfile
          id=result._id
          image.mv('./public/gentswear/'+id+'.jpg',function(err,done){
                      console.log("done")
          })
      })
      })``
      }
      else if(x.category==='5'){
        console.log("hii5")
        data={name:x.item[0],price:x.item[1],image:x.avatar}
      dbo.collection("fashion").insertOne(data, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close()
        dbo.collection("fashion").findOne({name:x.item[0]}, function(err, result) {
          if (err) throw err;
          console.log(result);
          let image=req.files.myfile
          id=result._id
          image.mv('./public/fashion/'+id+'.jpg',function(err,done){
                      console.log("done")
          })
      })
      })
      }
      else if(x.category==='6'){
        console.log("hii6")
        data={name:x.item[0],price:x.item[1],image:x.avatar}
      dbo.collection("footwear").insertOne(data, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close()
        dbo.collection("footwear").findOne({name:x.item[0]}, function(err, result) {
          if (err) throw err;
          console.log(result);
          let image=req.files.myfile
          id=result._id
          image.mv('./public/footwear/'+id+'.jpg',function(err,done){
                      console.log("done")
          })
      })
      });
      }
  })
})

module.exports = router;
