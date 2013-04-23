var socket = io.connect('/');
var angle;
var sendHit = function(action){
  console.log(action);
  socket.emit('device-motion', action);
};
window.addEventListener('shake', shaken, false);

function shaken(){
  if(angle > 200){
    sendHit('snare');
  }
  if(angle < 150){
    sendHit('hihat');
  }
}

$(document).on('vclick', document, function(){
  if(angle > 200){
    sendHit('snare');
  }
  if(angle < 150){
    sendHit('hihat');
  }
});

if(window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", function(event) {
    var rotateDegrees = event.alpha;
    var leftToRight = event.gamma;
    var frontToBack = event.beta;
    angle = Math.round(rotateDegrees);
    // handleOrientationEvent(frontToBack, leftToRight,
    //rotateDegrees);
  }, false);
}

// function handleOrientationEvent(z,x,o) {
//   var data = {
//     z: (Math.round(z)),
//     x: (Math.round(x)),
//     o: (Math.round(o))
//   };
//socket.emit('testing', data);
// }

