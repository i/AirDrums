if (screen.width <= 699) {
  document.location = "stick";
}

var socket = io.connect('/');
var snare = AudioFX('/assets/sounds/snare', { formats: ['mp3'], pool: 5, volume: 1.0 } );
var cowbell = AudioFX('/assets/sounds/cowbell', { formats: ['mp3'], pool: 5, volume: 1.0 } );
var tom1 = AudioFX('/assets/sounds/tom1', { formats: ['mp3'], pool: 5, volume: 1.0 } );
var ride = AudioFX('/assets/sounds/ride', { formats: ['mp3'], pool: 5, volume: 1.0 } );
var crash = AudioFX('/assets/sounds/crash', { formats: ['mp3'], pool: 5, volume: 1.0 } );
var kick = AudioFX('/assets/sounds/kick', { formats: ['mp3'], pool: 5, volume: 1.0 } );
var connected = AudioFX('/assets/sounds/connected', {formats: ['mp3'], volume: 1.0 } );
// var hihat = AudioFX('/assets/sounds/hihat', { formats: ['mp3'], pool: 5, volume: 1.0 } );
// var tom2 = AudioFX('/assets/sounds/tom2', { formats: ['mp3'], pool: 5, volume: 1.0 } );

var sessionID = Math.round(Math.random()*1171).toString();
$('#key').append(sessionID);

socket.emit('join', sessionID);

socket.on('joined', function() {
  console.log('joined, woohoo!');
  transition();
});

socket.on('action', function(data){
  console.log(data);
  if (data === 'snare'){
    snare.play();
    drawSnare(true);
    setTimeout(function(){
      drawSnare(false);
    }, 40);
  }
  else if (data === 'cowbell'){
    cowbell.play();
    drawCow(true);
    setTimeout(function(){
      drawCow(false);
    }, 40);
  }
  else if (data === 'tom1'){
    tom1.play();
    drawTom(true);
    setTimeout(function(){
      drawTom(false);
    }, 40);
  }
  else if (data === 'crash'){
    crash.play();
    drawCrash(true);
    setTimeout(function(){
      drawCrash(false);
    }, 40);
  }
  else if (data === 'ride'){
    ride.play();
    drawRide(true);
    setTimeout(function(){
      drawRide(false);
    }, 40);
  }
  else if (data === 'kick')
    kick.play();
});

function transition() {
  $('#prejoin').slideUp();
  $('#postjoin').show();
  connected.play();
  drawKit();
}


var canvas = document.getElementById('drumSet');
var context = canvas.getContext('2d');
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = canvas.width / 3;
var labels = " Ride   Snare  Crash  Tom    Cowbell ";

function drawKit() {
  drawCrash(false);
  drawTom(false);
  drawCow(false);
  drawRide(false);
  drawSnare(false);
  //  drawTextAlongArc(context, labels, x, y, radius, Math.PI * 2 );
}

function drawCrash(hit) {
  context.beginPath();
  context.arc(x, y, radius, radians(270), radians(270 + 72), false);
  context.lineWidth = 100;
  if(hit)
    context.strokeStyle = "red";
  else context.strokeStyle = "#3B14AF";
  context.stroke();
}

function drawTom(hit) {
  context.beginPath();
  context.arc(x, y, radius, radians(270 + 72), radians(270 + 144), false);
  context.lineWidth = 100;
  if(hit)
    context.strokeStyle = "red";
  else context.strokeStyle = "#00B358";
  context.stroke();
}

function drawCow(hit) {
  context.beginPath();
  context.arc(x, y, radius, radians(270 + 144), radians(270 + 144 + 72), false);
  context.lineWidth = 100;
  if(hit)
    context.strokeStyle = "red";
  else context.strokeStyle = "#9a258f";
  context.stroke();
}

function drawRide(hit) {
  context.beginPath();
  context.arc(x, y, radius, radians(270 + 144 + 72), radians(270 + 144 + 144), false);
  context.lineWidth = 100;
  if(hit)
    context.strokeStyle = "red";
  else context.strokeStyle = "#fff265";
  context.stroke();
}

function drawSnare(hit) {
  context.beginPath();
  context.arc(x, y, radius, radians(270 + 144 + 144), radians(270 + 144 + 72 + 144), false);
  context.lineWidth = 100;
  if(hit)
    context.strokeStyle = "red";
  else context.strokeStyle = "#f79752";
  context.stroke();
}

function radians(degrees) {
  return (Math.PI/180) * degrees;
}

function drawTextAlongArc(context, str, centerX, centerY, radius, angle) {
  var len = str.length, s;
  context.save();
  context.translate(centerX, centerY);
  context.rotate(-1 * angle / 2);
  context.rotate(-1 * (angle / len) / 2);
  for(var n = 0; n < len; n++) {
    context.rotate(angle / len);
    context.save();
    context.translate(0, -1 * radius);
    s = str[n];
    context.fillText(s, 0, 0);
    context.restore();
  }
  context.restore();
}

