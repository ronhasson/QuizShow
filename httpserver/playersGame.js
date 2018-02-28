var socket = io();
var tSeconds = 45;
var counter;

function connect() {
  var player_name = getCookie("player_name");
  console.log(player_name);
  if (player_name != "") {
    socket.emit('connectUser', player_name);
  }
}
connect();

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

socket.on('newQuestion', function (data) {
  if (document.getElementById("questionScreen").style.display == "none") {
    document.getElementById("preGameWait").style.display = "none";
    document.getElementById("endScreen").style.display = "none";
    document.getElementById("questionScreen").style.display = "";
  }
  clearInterval(counter);
  console.log(data);
  document.getElementById("qText").innerHTML = data.q_question;
  document.getElementById("a0").value = data.q_answers[0];
  document.getElementById("a1").value = data.q_answers[1];
  document.getElementById("a2").value = data.q_answers[2];
  document.getElementById("a3").value = data.q_answers[3];
  if (data.q_category != undefined) {
    document.getElementById("qCateg").innerHTML = data.q_category;
  } else {
    document.getElementById("qCateg").innerHTML = "";
  }
  if (data.q_type == "tf") {
    document.getElementById("a2").style.display = "none";
    document.getElementById("a3").style.display = "none";
  } else {
    document.getElementById("a2").style.display = "";
    document.getElementById("a3").style.display = "";
  }
  if (data.q_type == "tf" || data.q_type == "finals") {
    allButtonDisabled(true);
    document.getElementById("tTimer").style.visibility = "hidden";
  } else {
    allButtonDisabled(false);
    document.getElementById("tTimer").style.visibility = "";
    colorBlink();
    //start timer
    tSeconds = 45;
    counter = setInterval(timer, 1000);
  }

});

function allButtonDisabled(b) {
  document.getElementById("a0").disabled = b;
  document.getElementById("a1").disabled = b;
  document.getElementById("a2").disabled = b;
  document.getElementById("a3").disabled = b;
}

function colorBlink() {
  document.getElementById("colorBar").style.backgroundColor = "white";
  setTimeout(() => {
    document.getElementById("colorBar").style.backgroundColor = getCookie("player_color");
  }, 400);
}

function timer() {
  tSeconds = tSeconds - 1;
  document.getElementById("tTimer").innerHTML = tSeconds;
  if (tSeconds <= 0) {
    clearInterval(counter);
    allButtonDisabled(true);
    //emit fail
    return;
  }

}