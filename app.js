var express = require('express');
var app = express();
app.set('view engine','ejs');
app.get('/',function(req,res){
  res.render('test',{name : "POng"});
});
app.get('/:job/:name',function(req,res){
  var data = { school : "Rayongwittayakom",age : 20 }
  res.render('profile',{name:req.params.name,job:req.params.job,data:data});
});
app.listen(8888);
