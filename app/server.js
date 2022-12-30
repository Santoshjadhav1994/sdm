var express=require("express");
var app=express();
var path=require("path");
var fs=require("fs");

//server configuration
app.use(express.static(path.join(__dirname,"public")));


app.get("/",function(req,resp){
    resp.sendFile(path.join(__dirname+"/index.html"));

});

app.get("/hello",function(req,resp){
    console.log("Calling rest api");
    var person={firstName:"Santosh",lastName:"Jadhav",age:26};
    resp.send(person);
});


var server = app.listen(8081,function(){

    var host=server.address().address;
    var port=server.address().port;

    console.log("Server is listening at http://localhost:8081",host,port)
})