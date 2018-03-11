var express = require('express');
var volleyball = require('volleyball');
var bodyParser = require('body-parser');
var path = require('path');

var db = require('./db').db;
var futurama_DB2 = require('./db').futuramaDB;

var futuramaRouter = require('./futuramaRouter');

var app = express();

// var dummyData = require('./dummyData');


app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname,'/public')))

app.use('/episodes', futuramaRouter);


app.use('*', function(req,res, next){
  res.send('you\'ve arrived to the default route')
})

var server = app.listen(3001, function(){
  console.log('listening on port ', server.address().port);
  db.sync({force: false})
  .then(message => {
   console.log(' and db is synced now')
 })
});
