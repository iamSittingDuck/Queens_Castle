module.exports = function(app){
  // Controllers
  return {
    home: function(req,res){
      console.log(req)
      res.render('app',{nickName:req.session.user.nickName,url:req.headers.referer})
    }
  }
}