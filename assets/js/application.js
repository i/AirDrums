if (screen.width <= 699) {
  document.location = "stick";
}

var socket = io.connect('/');
var snare = AudioFX('/assets/sounds/snare', { formats: ['mp3'], pool: 5 } );
var hihat = AudioFX('/assets/sounds/hihat', { formats: ['mp3'], pool: 5 } );
var cowbell = AudioFX('/assets/sounds/cowbell', { formats: ['mp3'], pool: 5 } );
var tom1 = AudioFX('/assets/sounds/tom1', { formats: ['mp3'], pool: 5 } );
var tom2 = AudioFX('/assets/sounds/tom2', { formats: ['mp3'], pool: 5 } );
var ride = AudioFX('/assets/sounds/ride', { formats: ['mp3'], pool: 5 } );
var crash = AudioFX('/assets/sounds/crash', { formats: ['mp3'], pool: 5 } );
var kick = AudioFX('/assets/sounds/kick', { formats: ['mp3'], pool: 5 } );

var sessionID = Math.round(Math.random()*1171).toString();
$('#key').append(sessionID);

socket.emit('join', sessionID);

socket.on('action', function(data){
  console.log(data);
  switch (data) {
    case (data === 'snare'):
      snare.play();
      break;
    case (data === 'hihat'):
      hihat.play();
      break;
    case (data === 'cowbell'):
      cowbell.play();
      break;
    case (data === 'tom1'):
      tom1.play();
      break;
    case (data === 'tom2'):
      tom2.play();
      break;
    case (data === 'crash'):
      crash.play();
      break;
    case (data === 'ride'):
      ride.play();
      break;
    case (data === 'kick'):
      kick.play();
      break;
  }
});

//GA
// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new
// Date();a=s.createElement(o),
// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
// ga('create', 'UA-40016705-2', 'eddiezane.me');
// ga('send', 'pageview');
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-40016705-4', 'airdrum.co');
ga('send', 'pageview');

