module.exports = function(app){
  // Controllers
  return {
    home: function(req,res){
      res.render('app',{nickName:req.session.user.nickName})
    }
  }
}