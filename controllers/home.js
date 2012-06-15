module.exports = function(app){
  // Controllers
  return {
    landing: function(req,res){
      res.render('index');
    }
  }
}