var socket = io.connect('/')
, angle
, angle_offset = 0
, iphone = navigator.userAgent.toLowerCase().indexOf("iphone");

function sendHit(action) {
  console.log(action);
  socket.emit('device-motion', action);
};

function joinSession(sessionID) {
  socket.emit('join', sessionID);
  $('#sessionForm').hide();
}

window.addEventListener('shake', shaken, false);

function shaken() {
  if (iphone === -1) {
    if(angle <= 45) {
      sendHit('crash');
    }
    if(angle > 45 && angle <= 90) {
      sendHit('tom1');
    }
    if(angle > 90 && angle <= 135) {
      sendHit('tom2');
    }
    if(angle > 135 && angle <= 225) {
      sendHit('cowbell');
    }
    if(angle > 225 && angle <= 270) {
      sendHit('ride');
    }
    if(angle > 270 && angle <= 315) {
      sendHit('hihat');
    }
    if(angle > 315) {
      sendHit('snare');
    }
  }
  else {
    if(angle <= 45) {
      sendHit('snare');
    }
    if(angle > 45 && angle <= 90) {
      sendHit('hihat');
    }
    if(angle > 90 && angle <= 135) {
      sendHit('ride');
    }
    if(angle > 135 && angle <= 225) {
      sendHit('cowbell');
    }
    if(angle > 225 && angle <= 270) {
      sendHit('tom2');
    }
    if(angle > 270 && angle <= 315) {
      sendHit('tom1');
    }
    if(angle > 315) {
      sendHit('crash');
    }
  }
}

$(document).on('vclick', "#kick", function() {
  shaken();
});

if(window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", function(event) {
    var rotateDegrees = event.alpha;
    // var leftToRight = event.gamma;
    // var frontToBack = event.beta;
    angle = Math.round(rotateDegrees);
    // handleOrientationEvent(frontToBack, leftToRight,
    // rotateDegrees);
  }, false);
}

// function handleOrientationEvent(z,x,o) {
// var data = {
// z: (Math.round(z)),
// x: (Math.round(x)),
// o: (Math.round(o))
// };
// socket.emit('testing', data);
// }

