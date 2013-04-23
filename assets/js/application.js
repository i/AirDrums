var socket = io.connect('/');
var snare = new Audio('/assets/sounds/snare.wav');
var hihat = new Audio('/assets/sounds/hihat.wav');
var cowbell = new Audio('/assets/sounds/cowbell.wav');
var tom1 = new Audio('/assets/sounds/tom1.wav');
var tom2 = new Audio('/assets/sounds/tom2.wav');
var ride = new Audio('assets/sounds/ride.wav');
var crash = new Audio('assets/sounds/crash.wav');

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
});

//GA
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new
  Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-40016705-2', 'eddiezane.me');
ga('send', 'pageview');

