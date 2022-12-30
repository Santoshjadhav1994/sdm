var express=require("express");
var app=express();
var path=require("path");

//server configuration

app.use(express.static(path.join(__dirname,"public")));

app.get("/",function(req,resp){
    resp.sendFile(path.join(__dirname+"/index.html"));
});

app.listen(2000);
console.log("Server is running at port no 2000");
