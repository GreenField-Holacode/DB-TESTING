var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var database = require('../sql_Database/data.js');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/assesments', function(req, res){
  database.selectMindQ((err, results) => {
    if(err){
      console.log("error hitting mind assesment db");
      res.sendStatus(500);
    }else {
      console.log('works');
      res.status(200).json(results);
    }
  })
});

app.get('/reading', function(req, res){
  database.selectReadingQ((err, results)  => {
    if(err){
      console.log('error hitting reading assesment db');
      res.sendStatus(500);
    }else {
      res.status(200).json(results);
    }
  })
});

app.get('/assesments', function(req, res){
  database.selectWrittenQ((err, results)  => {
    if(err){
      console.log('error hitting written assesment db');
      res.sendStatus(500);
    }else {
      res.send(200).json(results);
    }
  })
});

app.get('/profile', function(req, res){
  database.selectProfile((err, results) => {
    if(err){
      console.log('error hitting profile db');
      res.sendStatus(500);
    }else{
      res.send(200).json(results);
    }
  }
)
});


app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});
