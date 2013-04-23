var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server)
  , port = 8080;

server.listen(port);
console.log('app running at localhost:' + port);
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.get('/stick', function(req, res){
  res.sendfile(__dirname + '/stick.html');
});

io.sockets.on('connection', function(socket){
  console.log('connection!');
  socket.on('device-motion', function(data){
    console.log(data);
    socket.broadcast.emit('action', data);
  });
  socket.on('testing', function(data){
    console.log(data);
  });
});
