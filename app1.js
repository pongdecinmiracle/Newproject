var express = require('express');
var router = express.Router();
router.get('/test',function(req,res){
  res.render('teset');
})
router.get('/test/:name',function(req,res,next ){
  res.render('test',{name : req.params.name});
});
// router.listen(8888);
module.exports = router;
