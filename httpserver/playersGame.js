var socket = io();

function connect() {
  var player_name = getCookie("player_name");
  console.log(player_name);
  if (player_name != "") {
    socket.emit('connectUser', player_name);
  }
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

function checkCookie() {
  var user = getCookie("user");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    alert("error no cookie(user)");
    return false;
  }
  var color = getCookie("color");
  if (color != "") {
    alert("color:  " + user);
  } else {
    alert("error no cookie(color)");
    return false;
  }
}

function changeThemeColor(ccolor) {
  var metaThemeColor = document.querySelector("meta[name=theme-color]");
  metaThemeColor.setAttribute("content", ccolor);
}


connect();