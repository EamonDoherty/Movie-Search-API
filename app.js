var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("search")
});


app.get("/results",function(req, res) {
  var query =  req.query.search;
  var url = "http://omdbapi.com/?s=" + query + "&apikey=thewdb";   
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body) // JSON.parse == Turns String from the API into JavaScript object
            res.render("results", {data: data});
        }
    });
});

   
// We have to tell Express what to listen for before the get request gets initiated
app.listen(3000,() => {
console.log(" has started Listening on port 3000!")
});
// http://localhost:3000