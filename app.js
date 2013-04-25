var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server)
  , port = 8080;

server.listen(port);
console.log('app running at localhost:' + port);
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/views/index.html');
});

app.get('/stick', function(req, res){
  res.sendfile(__dirname + '/views/stick.html');
});

app.get('/about', function(req, res){
  res.sendfile(__dirname + '/views/about.html');
});

io.sockets.on('connection', function(socket){
  console.log('connection!');
  socket.on('join', function(sessionID){
    socket.set('sessionID', sessionID, function(){
      socket.join(sessionID);
    });
  });
  socket.on('device-motion', function(data){
    socket.get('sessionID', function(err, sessionID){
      if (err) {
        console.log(err);
      } else if (sessionID) {
        console.log(data);
        socket.broadcast.to(sessionID).emit('action', data);
      } else {
        console.log("No sessionID");
      }
    });
  });
  socket.on('testing', function(data){
    console.log(data);
  });
});
