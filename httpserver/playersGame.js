var socket = io();
var tSeconds;
var counter;
var player_name;
var isPersonalQuestion = false;
var q_num;

function connect() {
  player_name = getCookie("player_name");
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

function setCookie(cname, cvalue) { //cname = user,color
  document.cookie = cname + "=" + cvalue + ";path=/";
}

function changeThemeColor(ccolor) {
  var metaThemeColor = document.querySelector("meta[name=theme-color]");
  metaThemeColor.setAttribute("content", ccolor);
}

socket.on('newQuestion', function (data) {
  console.log(isPersonalQuestion);
  q_num = data[0];
  question = data[1];

  if (document.getElementById("questionScreen").style.display == "none") {
    document.getElementById("preGameWait").style.display = "none";
    document.getElementById("endScreen").style.display = "none";
    document.getElementById("questionScreen").style.display = "";
  }
  removeAllButtonEffects();
  clearInterval(counter);
  console.log(question);
  document.getElementById("qText").innerHTML = question.q_question;
  document.getElementById("a0").value = question.q_answers[0];
  document.getElementById("a1").value = question.q_answers[1];
  document.getElementById("a2").value = question.q_answers[2];
  document.getElementById("a3").value = question.q_answers[3];


  if (question.q_type == "tf" || question.q_type == "finals" || isPersonalQuestion) {
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
  if (question.correct_answer == undefined) {
    isPersonalQuestion = true;
  }
  else {
    isPersonalQuestion = false;
  }
  if (question.q_category != undefined) {
    document.getElementById("qCateg").innerHTML = question.q_category;
  } else {
    document.getElementById("qCateg").innerHTML = "";
  }
  if (question.q_type == "tf") {
    document.getElementById("a2").style.display = "none";
    document.getElementById("a3").style.display = "none";
  } else {
    document.getElementById("a2").style.display = "";
    document.getElementById("a3").style.display = "";
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

function sendAns(i) {
  document.getElementById("a" + i).classList.add("selected");
  allButtonDisabled(true);
  clearInterval(counter);
  if (isPersonalQuestion) {
    socket.emit("setAns", [q_num, i]);
  }
  else {
    socket.emit("qAns", [i, player_name]);
  }
}

socket.on("resAns", function (data) {
  var sBtn = document.getElementsByClassName("selected")[0];
  removeAllButtonEffects();
  if (data[0]) {
    sBtn.classList.add("correct");
    setCookie("score", data[1]);
    document.getElementById("tScore").innerHTML = getCookie("score");
  } else {
    sBtn.classList.add("wrong");
  }
});

function removeClass(rclass) {
  document.getElementById("a0").classList.remove(rclass);
  document.getElementById("a1").classList.remove(rclass);
  document.getElementById("a2").classList.remove(rclass);
  document.getElementById("a3").classList.remove(rclass);
}

function removeAllButtonEffects() {
  removeClass("selected");
  removeClass("correct");
  removeClass("wrong");
}

socket.on("kicked", function () {
  window.location.href = "players_login.html";
});
