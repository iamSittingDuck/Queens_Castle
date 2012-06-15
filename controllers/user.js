module.exports = function(app){
  var   mongoose  = require('mongoose')
      , Schema    = mongoose.Schema
      , ObjectId  = Schema.ObjectId;
  // Controllers
  return {
    new: function(req,res){
      var user = new app.models.users(req.body);
      user.save(function(err){
        if(err){
          console.log(err);
        }
      });
      res.redirect('/app');
    },
    auth:function(req,res){
      app.models.users.findOne({email:req.body.email}, function(err,user){
        if(user && user.password == req.body.password){
          var tmp = user.toObject();
          delete tmp._id;
          req.session.user = tmp;
          res.redirect('/app')
        }else{
          res.send('Wrong Username/Password!')
        }
      })
    },
    register: function(req,res){
      res.render('user/register');
    }
  }
}