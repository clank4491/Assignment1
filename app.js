var express  = require('express');
var app = express();
var port = 3000;

//app.use(express.static('public'));

app.use(express.static('src/views'));

app.get("/", function(req, res){
    res.send("");
    
});

app.get("/login", function(req, res){
    res.send("Hello World");
});

//Listen on the port
app.listen(port, function(err){
    console.log("Server is running");
});