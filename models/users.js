var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
module.exports= function(app){
  mongoose.connect(app.config.db);
  var User = new Schema({
    id: {type: ObjectId, index: true},
    email: String,
    password: String,
    nickName: String
  },{strict:true});
  // Export Model
  return mongoose.model('User',User);
}