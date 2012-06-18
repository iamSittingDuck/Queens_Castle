// ================================================
// Module Dependencies
// ================================================
var express     = require('express')
  , fs          = require('fs')
  , path        = require('path')
  , MongoStore  = require('connect-mongo')(express);
var app = module.exports = express.createServer();

// ================================================
// AutoLoad in modules
  var autoLoad = ['controllers','models'];
  //load in config variables
  app.config = require('./config/index')(app);
// ================================================

for(x in autoLoad){
  var files = fs.readdirSync('./' + autoLoad[x]);
  var obj = {}
  files.forEach(function(file){
    var filepath = './'+autoLoad[x]+'/' + file;
    var stat      = fs.statSync(filepath);
    if(!stat.isDirectory() && path.extname(file) === '.js'){
      var name = path.basename(file,'.js');
      var fn = require('./'+autoLoad[x]+'/' + name)
      obj[name] = fn(app);
    }
  })
  app[autoLoad[x]] = obj;
}

// ================================================
// Config
// ================================================

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.set('view options', { layout: false });
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(express.cookieParser());
  app.use(express.session({
    secret: 'mysecret',
    store: new MongoStore({
      url: app.config.db,
      db: 'QueenSession'
    })
  }));
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// ================================================
// Routes
// TODO: move this somewhere else
// ================================================
  // UnAthenticated
  app.get('/', app.controllers.home.landing);
  app.post('/user/new',app.controllers.user.new);
  app.post('/user/auth',app.controllers.user.auth);
  app.get('/app',app.controllers.app.home);

// ================================================
// Start Server
// ================================================
app.listen(8080, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

// ================================================
// Create Event Emmiter
// TODO: Move somewhere else
// ================================================
var io = require('socket.io').listen(app);
io.sockets.on('connection',function(socket){
  socket.emit('welcomeMsg',{msg:'You have connected!'});
  socket.on('userConnected',function(data){
    io.sockets.emit('userConnected',{msg:data.nickName + ' has connected!'})
  });
});
