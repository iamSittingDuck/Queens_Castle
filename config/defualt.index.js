module.exports = function(app){
  return {
    session:{
      db:{
        db:'QueenSession',
        host: 'localhost'
      },
      secret:"mysecret"
    }
  }
}