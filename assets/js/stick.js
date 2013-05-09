var socket = io.connect('/')
, angle
, angle_offset = 0
, iphone = navigator.userAgent.toLowerCase().indexOf("iphone");

function sendHit(action) {
  console.log(action);
  socket.emit('device-motion', action);
};

function joinSession(sessionID) {
  if (sessionID === "")
    location.reload();
  else {
    socket.emit('join', sessionID);
    $('#sessionForm').hide();
  }
}

window.addEventListener('shake', shaken, false);

function shaken() {
  if (iphone === -1) {
    if(angle <= 72) {
      sendHit('crash');
    }
    if(angle > 72 && angle <= 144) {
      sendHit('tom1');
    }
    if(angle > 144 && angle <= 216) {
      sendHit('cowbell');
    }
    if(angle > 216 && angle <= 288) {
      sendHit('ride');
    }
    if(angle > 288) {
      sendHit('snare');
    }
  }
  else {
    if(angle <= 72) {
      sendHit('snare');
    }
    if(angle > 72 && angle <= 144) {
      sendHit('ride');
    }
    if(angle > 144 && angle <= 216) {
      sendHit('cowbell');
    }
    if(angle > 216 && angle <= 288) {
      sendHit('tom1');
    }
    if(angle > 288) {
      sendHit('crash');
    }
  }
}

$(document).on('vclick', "#kick", function() {
  sendHit('kick');
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

$.mobile.loadingMessage = false;

$(document).bind( "mobileinit", function(event) {
  $.extend($.mobile.zoom, {locked:true,enabled:false});
});
