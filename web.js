var express = require('express');
var app = express();

app.set('view engine','ejs');
app.get('/',function(req,res){
  res.render('home');
});
app.get('/contact',function(req,res){
  res.render('contact');
});
app.get('/facebook',function(req,res){
  res.render('facebook');
});
app.get('/showForm',function(req,res){
  res.sendfile(__dirname+"/views/"+"showForm.html");
});
app.get('/showData',function(req,res){
  data = {
     fname:req.query.fname,
     lname:req.query.lname
  };
  console.log(data);
  res.send(JSON.stringify(data));
});
app.listen(8888);
