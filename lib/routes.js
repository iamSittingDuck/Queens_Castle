module.exports = function(app){
  app.get('/', app.controllers.home.home);
  app.post('/user/new',app.controllers.home.landing);
  app.get('/user/register',app.controllers.home.home);
  app.post('/user/auth',app.controllers.home.home);
  app.get('/app',app.controllers.home.home);
}