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
// var hihat = AudioFX('/assets/sounds/hihat', { formats: ['mp3'], pool: 5, volume: 1.0 } );
// var tom2 = AudioFX('/assets/sounds/tom2', { formats: ['mp3'], pool: 5, volume: 1.0 } );

var sessionID = Math.round(Math.random()*1171).toString();
$('#key').append(sessionID);

socket.emit('join', sessionID);

socket.on('joined', function() {
  console.log('joined, woohoo!');
  $('#prejoin').slideUp();
  $('#postjoin').slideDown();
});

socket.on('action', function(data){
  console.log(data);
  if (data === 'snare')
  snare.play();
  else if (data === 'hihat')
  hihat.play();
  else if (data === 'cowbell')
  cowbell.play();
  else if (data === 'tom1')
  tom1.play();
  else if (data === 'tom2')
  tom2.play();
  else if (data === 'crash')
  crash.play();
  else if (data === 'ride')
  ride.play();
  else if (data === 'kick')
  kick.play();
});

function dev() {
  $('#prejoin').slideUp();
  $('#postjoin').slideDown();
}

