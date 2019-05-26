var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.render("index.ejs");
});

app.get("/discover",function(req,res){
    res.render("discover.ejs");
});


app.use(express.static("public"));

app.listen(3000,process.env.IP,function(){
    console.log("server started!");
});

