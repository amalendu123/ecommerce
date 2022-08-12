var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fileUpload = require("express-fileupload");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var footwearRouter = require('./routes/footwear');
var fashionRouter = require('./routes/fashion');
var gentswearRouter = require('./routes/gentswear');
var kidsboyswearRouter=require('./routes/kidsboyswear');
var kidsgirlswearRouter = require('./routes/kidsgirlswear');
var ladieswearRouter = require('./routes/ladieswear');
var addtocart=require('./routes/cart.js');
var cartin=require('./routes/cartin.js');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  fileUpload()
);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin',adminRouter);
app.use('/footwear',footwearRouter);
app.use('/fashion', fashionRouter);
app.use('/gents', gentswearRouter);
app.use('/kidsboy', kidsboyswearRouter);
app.use('/kidsgirl', kidsgirlswearRouter);
app.use('/ladieswear', ladieswearRouter);
app.use('/addtocart',addtocart);
app.use('/cartin',cartin);
app.use(fileUpload())


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
