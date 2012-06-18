module.exports = function(app){
  return {
    db:'mongodb://nodejitsu:ad0e874a9c1ad670a0771209ad9ba98b@flame.mongohq.com:27087/nodejitsudb668732957824',
    session:{
      db:{
        db:'QueenSession',
        host: 'mongodb://nodejitsu:ad0e874a9c1ad670a0771209ad9ba98b@flame.mongohq.com:27087/nodejitsudb668732957824'
      },
      secret:"mysecret"
    }
  }
}