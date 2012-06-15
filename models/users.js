var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
mongoose.connect('mongodb:localhost/QueensCastle');
module.exports= function(app){
  var User = new Schema({
    id: {type: ObjectId, index: true},
    email: String,
    password: String,
    nickName: String
  },{strict:true});
  // Export Model
  return mongoose.model('User',User);
}