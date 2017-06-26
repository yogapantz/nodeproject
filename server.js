var mongojs = require('mongojs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var db = mongojs('Cooking' , ['recipes']);
var PORT = 3000;
app.use(express.static(__dirname + "/client"));
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); // for parsing application/json

app.get('/recipes', function(req, res){
   db.recipes.find(function(err, docs){
    res.json(docs);
   });
});

app.post('/addrecipe', function(req, res){
    var myobj = { name: req.body.name, lod: req.body.lod, rating: req.body.rating };

    db.recipes.insert(myobj, function(err, docs) {
        if (err) throw err;
        res.json(docs);
    });
});

app.listen(PORT);
console.log("server running on port " + PORT);





