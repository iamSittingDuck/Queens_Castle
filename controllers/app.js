module.exports = function(app){
  // Controllers
  return {
    home: function(req,res){
      console.log(req.session)
      res.render('app',{nickName:req.session.user.nickName})
    }
  }
}