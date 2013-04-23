var socket = io.connect('/');
var snare = new Audio('/assets/sounds/snare.mp3');
var hihat = new Audio('/assets/sounds/hihat.mp3');
var cow = new Audio('/assets/sounds/cow.mp3');

socket.on('action', function(data){
  console.log(data);
  if (data === 'snare')
    snare.play();
  else if (data === 'hihat')
    hihat.play();
  else if (data === 'cow')
    cow.play();
});

//GA
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new
  Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-40016705-2', 'eddiezane.me');
ga('send', 'pageview');

