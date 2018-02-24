var socket = io();

// fun. join: try to join the game with a player name.
function join() {
  var player_name = document.getElementById("player_name").value;
  socket.emit('join', player_name);
}

// socketon. join_success: save cookie, redirect to next page.
socket.on('join_success', function(player_name) {
  setCookie('player_name', player_name);
  window.location.href = "playersGame.html";
});

// socketon. join_failed: inform the user.
socket.on('join_fail', function(player_name) {
  alert('Player name unavailable.');
});

function setCookie(cname, cvalue) { //cname = user,color
  document.cookie = cname + "=" + cvalue + ";path=/";
}





/*
socket.on('bgColor', function(data) {
  alert(data)
  document.getElementById("body").style.background = data;
});



function onClickLogin() {
  var player_name = document.getElementById("player_name").value;
  connect(player_name);
}

function connect(player_name) {
  socket.emit('connect', player_name);
}

socket.on('connected', function(player_name) {
  setCookie('player_name', player_name);
});


var player_name = getCookie('player_name');
if (player_name != "") {
  alert(player_name);
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
*/
