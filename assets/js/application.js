var socket = io.connect('/');
var action = function(data){
  console.log(data);
  $.playSound('/assets/sounds/' + data + '.wav');
};
socket.on('action', function(data){
  console.log(data);
  action(data);
});

