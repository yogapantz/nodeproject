var mongojs = require('mongojs');
var express = require('express');
var app = express();
var db = mongojs('recipe' , ['recipe']);
app.use(express.static(__dirname + "/client"));

app.get('/recipes', function(req, res){
  console.log('GET request recived')
   db.recipe.find(function(err, docs){
    console.log(docs);
    res.json(docs);
   });
});

app.listen(3000);
console.log("server running on port 3000");





