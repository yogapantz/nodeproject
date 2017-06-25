var mongojs = require('mongojs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var db = mongojs('recipe' , ['recipe']);
var PORT = 3000;
app.use(express.static(__dirname + "/client"));
app.use(bodyParser.urlencoded({ extended: true })); 


app.get('/recipes', function(req, res){
  console.log('GET request recived');
   db.recipe.find(function(err, docs){
    console.log(docs);
    res.json(docs);
   });
});

app.post('/addrecipe', function(req, res){
    var myobj = { name: req.body.name, lod: req.body.lod, rating: req.body.rating };
    db.recipe.insert(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});

app.listen(PORT);
console.log("server running on port " + PORT);





