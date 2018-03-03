var socket = io();
var tSeconds;
var counter;

var bazzerColors = ["rgb(59, 0, 144)", "rgb(0, 114, 144)", "rgb(141, 144, 0)"];
var bazzerLock = false;

socket.on('newQuestion', function (data) {
    if (document.getElementById("questionScreen").style.display == "none") {
        document.getElementById("preGameWait").style.display = "none";
        document.getElementById("categSelect").style.display = "none";
        document.getElementById("leaderboardsView").style.display = "none";
        document.getElementById("questionScreen").style.display = "";
    }
    removeAllButtonEffects();
    document.getElementById("body").classList.remove("classicBG");
    document.getElementById("body").classList.remove("categBG");
    document.getElementById("body").classList.remove("persBG");
    clearInterval(counter);
    console.log(data);
    document.getElementById("qText").innerHTML = data[1].q_question;
    document.getElementById("a0").innerHTML = "א. " + data[1].q_answers[0];
    document.getElementById("a1").innerHTML = "ב. " + data[1].q_answers[1];
    document.getElementById("a2").innerHTML = "ג. " + data[1].q_answers[2];
    document.getElementById("a3").innerHTML = "ד. " + data[1].q_answers[3];
    if (data[1].q_category != undefined) {
        document.getElementById("qCateg").innerHTML = data[1].q_category;
    } else {
        document.getElementById("qCateg").innerHTML = "<br>";
    }
    if (data[1].q_type == "tf") {
        document.getElementById("a2").style.display = "none";
        document.getElementById("a3").style.display = "none";
    } else {
        document.getElementById("a2").style.display = "";
        document.getElementById("a3").style.display = "";
    }
    if (data[1].q_type == "tf" || data[1].q_type == "finals") {
        document.getElementById("tTimer").style.visibility = "hidden";
        bazzerLock = false;
    } else {
        document.getElementById("tTimer").style.visibility = "";
        //start timer
        tSeconds = 45;
        counter = setInterval(timer, 1000);
        if (data[1].q_type == "classic") {
            document.getElementById("body").classList.add("classicBG");
        }
        if (data[1].q_type == "category") {
            document.getElementById("body").classList.add("categBG");
        }
        if (data[1].q_type == "personal") {
            document.getElementById("body").classList.add("persBG");
        }
    }

});

socket.on("screenReveal", function (data) {
    console.log(data);
    if (data[1]) {
        document.getElementById("a" + data[0]).classList.add("correct");
    } else {
        document.getElementById("a" + data[0]).classList.add("wrong");
    }
});
socket.on("screenCateg", function (arr) {
    if (document.getElementById("categSelect").style.display == "none") {
        document.getElementById("preGameWait").style.display = "none";
        document.getElementById("questionScreen").style.display = "none";
        document.getElementById("leaderboardsView").style.display = "none";
        document.getElementById("categSelect").style.display = "";
    }
    document.getElementById("categ1").innerHTML = arr[0];
    document.getElementById("categ2").innerHTML = arr[1];
    document.getElementById("categ3").innerHTML = arr[2];
});

socket.on("leaderBoards", function (np) {
    if (document.getElementById("leaderboardsView").style.display == "none") {
        document.getElementById("preGameWait").style.display = "none";
        document.getElementById("questionScreen").style.display = "none";
        document.getElementById("leaderboardsView").style.display = "";
        document.getElementById("categSelect").style.display = "none";
    }
    console.log(np);
    document.getElementById("place1").innerHTML = np[0][0] + " - " + np[0][1];
    document.getElementById("place1").style.backgroundColor = np[0][2];

    document.getElementById("place2").innerHTML = np[1][0] + " - " + np[1][1];
    document.getElementById("place2").style.backgroundColor = np[1][2];

    document.getElementById("place3").innerHTML = np[2][0] + " - " + np[2][1];
    document.getElementById("place3").style.backgroundColor = np[2][2];

    document.getElementById("place4").innerHTML = np[3][0] + " - " + np[3][1];
    document.getElementById("place4").style.backgroundColor = np[3][2];

    document.getElementById("place5").innerHTML = np[4][0] + " - " + np[4][1];
    document.getElementById("place5").style.backgroundColor = np[4][2];

});

function timer() {
    tSeconds = tSeconds - 1;
    document.getElementById("tTimer").innerHTML = tSeconds;
    if (tSeconds <= 0) {
        clearInterval(counter);
        //emit fail
        return;
    }

}

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

document.addEventListener("keydown", function (e) {
    if (bazzerLock) {
        return;
    }
    if (e.which === 65) { //A
        document.getElementById("body").style.backgroundColor = bazzerColors[0];
        lockBazzer();
    }
    if (e.which === 66) { //B
        document.getElementById("body").style.backgroundColor = bazzerColors[1];
        lockBazzer();
    }
    if (e.which === 76) { //L
        document.getElementById("body").style.backgroundColor = bazzerColors[2];
        lockBazzer();
    }
});

function lockBazzer() {
    bazzerLock = true;
    setTimeout(function () {
        bazzerLock = false;
        document.getElementById("body").style.backgroundColor = "";
    }, 5000);
}