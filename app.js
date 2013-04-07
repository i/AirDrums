var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(3000);
console.log('app running at 3000');

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
});
