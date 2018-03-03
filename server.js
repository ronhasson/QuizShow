var fs = require('fs');
var os = require('os');
var ifaces = os.networkInterfaces();

var expr = require('express')();
var httpr = require('http').Server(expr);
var http = require('http');
var io = require('socket.io')(httpr);

var qr = require('qr-image');
//var file_loader = require("./apps/townofsalem/js/file_loader.js");

var playersList = [];

expr.get('/', function (req, res) {
    res.sendFile(__dirname + '/httpserver' + '/players_login.html');
});
expr.get('/screen', function (req, res) {
    res.sendFile(__dirname + '/httpserver' + '/screen.html');
});
expr.get(/^(.+)$/, function (req, res) {
    res.sendFile(__dirname + '/httpserver' + req.params[0]);
});
//file_loader.init(expr);
//file_loader.load_files();

const port = 80;




function showQuestionList() {
    var olqlist = document.getElementById("olqList");

    while (olqlist.firstChild) {
        olqlist.removeChild(olqlist.firstChild);
    }

    questionsList.forEach((element, i) => {
        let elem = document.createElement("dt");
        let numspan = document.createElement("span");
        let itext = document.createTextNode(i);
        numspan.appendChild(itext);
        numspan.classList.add("indexNum");
        elem.appendChild(numspan);
        let qtext = document.createTextNode(". " + element.q_question)
        elem.appendChild(qtext);
        olqlist.appendChild(elem);

        let ddans = document.createElement("dd");
        let anstext = document.createTextNode(element.correct_answer);
        ddans.appendChild(anstext);
        olqlist.appendChild(ddans);

        let ddtype = document.createElement("dd");
        let typetext = document.createTextNode(element.q_type);
        ddtype.appendChild(typetext);
        if (element.q_category != undefined) {
            let cattext = document.createTextNode(" - " + element.q_category);
            ddtype.appendChild(cattext);
        }
        olqlist.appendChild(ddtype);

        elem.classList.add("q" + i);
        ddans.classList.add("q" + i);
        ddtype.classList.add("q" + i);
        switch (element.q_type) {
            case "classic":
                elem.classList.add("classicList");
                break;
            case "category":
                elem.classList.add("categoryList");
                break;
            case "personal":
                elem.classList.add("personalList");
                break;
            case "tf":
                elem.classList.add("tfList");
                break;
            case "finals":
                elem.classList.add("finalsList");
                break;
        }
    });
}

showQuestionList();

io.on('connection', function (socket) {
    console.log(socket.request.connection.remoteAddress + ' connected, and socket id is: ' + socket.id);

    // socketon. join: call fun. check playername avail.
    socket.on('join', function (player_name) {

        if (checkName(player_name, socket.id)) {
            sendToSocketId('join_success', [player_name, playersList[player_name].color, playersList[player_name].score], socket.id);
        } else {
            sendToSocketId('join_fail', player_name, socket.id);
        }
    });

    socket.on('connectUser', function (player_name) {
        console.log(player_name + ' redirected: ' + socket.id);
        playersList[player_name].socket = socket.id; //replace the login socket with the new page socket
    });

    socket.on("qAns", function (data) {
        if (oq.correct_answer == nq.q_answers[data[0]]) {
            //playersList[data[1]].score += 10;
            //sendToSocketId("resAns", [true, playersList[data[1]].score], socket.id);
            playersList[data[1]].lastAns = true;
        } else {
            //sendToSocketId("resAns", [false, playersList[data[1]].score], socket.id);
        }
    });

    socket.on("setAns", function (data) {
        questionsList[data[0]].correct_answer = questionsList[data[0]].q_answers[data[1]];
        showQuestionList();
    });
});

var oq; //original question unsuffeld
var nq; //suffeld question - sent to players
var lastQuestionType;

function sendQuestion() {
    let i = document.getElementById("qInput").value;
    if (i == undefined) {
        return;
    }

    document.getElementById("qInput").value = "";
    document.getElementsByClassName("q" + i)[0].scrollIntoView();

    resetLastAns();
    lastQuestionType = questionsList[i].q_type;

    oq = questionsList[i];
    nq = JSON.parse(JSON.stringify(oq));
    shuffleArray(nq.q_answers);
    console.log(oq);
    console.log(nq);

    io.emit("newQuestion", [i, nq]);
    markDone(i);
}

var possibleQuestionIndexes;
var chosenCategories;

function sendCategories() {
    possibleQuestionIndexes = [];
    for (var i = 0; i < questionsList.length; i++) {
        if (!questionsList[i].done && questionsList[i].q_type == "category") {
            possibleQuestionIndexes.push(i);
        }
    }

    shuffleArray(possibleQuestionIndexes);
    chosenQuestionIndexes = possibleQuestionIndexes.slice(0, 3);

    //document.getElementById('category1').innerHTML = chosenQuestionIndexes[0] + " - " + questionsList[chosenQuestionIndexes[0]].q_category;
    //document.getElementById('category2').innerHTML = chosenQuestionIndexes[1] + " - " + questionsList[chosenQuestionIndexes[1]].q_category;
    //document.getElementById('category3').innerHTML = chosenQuestionIndexes[2] + " - " + questionsList[chosenQuestionIndexes[2]].q_category;

    chosenCategories = [questionsList[chosenQuestionIndexes[0]].q_category,
        questionsList[chosenQuestionIndexes[1]].q_category,
        questionsList[chosenQuestionIndexes[2]].q_category
    ];

    document.getElementById("categoryQueue").innerHTML = "" + chosenQuestionIndexes[0] + ": " + chosenCategories[0] + "<br> ";
    document.getElementById("categoryQueue").innerHTML += chosenQuestionIndexes[1] + ": " + chosenCategories[1] + "<br> ";
    document.getElementById("categoryQueue").innerHTML += chosenQuestionIndexes[2] + ": " + chosenCategories[2] + "";

    // TO DO: Send "chosenCategories" to screen.

    io.emit("screenCateg", chosenCategories);
}

function sendPersonalQuestion() {
    let i = document.getElementById("personalQuestionNum").value;
    if (i == undefined) {
        return;
    }

    let playerName = document.getElementById("personalQuestionPlayerName").value;
    if (!(playerName in playersList)) {
        return;
    }

    document.getElementById("personalQuestionNum").value = "";
    document.getElementsByClassName("q" + i)[0].scrollIntoView();
    document.getElementById("personalQuestionPlayerName").value = "";

    questionsList[i].q_question = questionsList[i].q_question.replace('{}', playerName);
    oq = questionsList[i];
    nq = questionsList[i];
    console.log(oq);
    console.log(nq);

    sendToSocketId("newQuestion", [i, oq], playersList[playerName].socket);
}

function revealAns() {
    var score_to_add = 10;
    if (lastQuestionType == "category") {
        score_to_add = 15;
    }

    for (var name in playersList) {
        if (playersList[name].lastAns) {
            playersList[name].score += score_to_add;
            sendToSocketId("resAns", [true, playersList[name].score], playersList[name].socket);
            playersList[name].lastAns = false;
        } else {
            sendToSocketId("resAns", [false, playersList[name].score], playersList[name].socket);
        }
    }

    io.emit("screenReveal", [findCorrectAnsIndex(), true]);
}

function findCorrectAnsIndex() {
    var correctIndex;
    nq.q_answers.forEach(function (temp, i) {
        if (oq.correct_answer == temp) {
            correctIndex = i;
        }
    });
    return correctIndex;
}

function revealButton() {
    var input = document.getElementById("btnRevealInput").value;
    document.getElementById("btnRevealInput").value = "";
    if (oq.correct_answer == nq.q_answers[input]) {
        io.emit("screenReveal", [input, true]);
    } else {
        io.emit("screenReveal", [input, false]);
    }
}

function resetLastAns() {
    for (var name in playersList) {
        playersList[name].lastAns = false;
    }
}

function aPlus10(){
  changeScore('aScore', 10);
}

function aMinus5(){
  changeScore('aScore', -5);
}

function bPlus10(){
  changeScore('bScore', 10);
}

function bMinus5(){
  changeScore('bScore', -5);
}

function lPlus10(){
  changeScore('lScore', 10);
}

function lMinus5(){
  changeScore('lScore', -5);
}

function changeScore(playerInputId, change) {
  current_score = parseInt(document.getElementById(playerInputId).value);
  document.getElementById(playerInputId).value = current_score + change;
}

function checkName(player_name, Psocket) {
    if (player_name in playersList) {
        return checkSocket(player_name, Psocket);
    } else {
        addPlayer(player_name, Psocket);
        return true;
    }
}

function checkSocket(player_name, Psocket) {
    if (isPlayerConnected(player_name)) {
        return false; //the original user is still connected
    } else {
        playersList[player_name].socket = Psocket; //replace the old unconnected socket
        return true;
    }
}

function addPlayer(player_name, Psocket) {
    var nColor = hexColorGen();
    playersList[player_name] = {
        socket: Psocket,
        color: nColor,
        score: 0,
        lastAns: false
    };
}

function isPlayerConnected(player_name) {
    return playersList[player_name].socket in io.sockets.connected;
}

function kickPlayer() {
    var input = document.getElementById("kickInput").value;
    if (input == undefined || input.length == 0) {
        console.log("kick unde");
        return;
    }
    sendToSocketId("kicked", undefined, playersList[input].socket);
    console.log("kicking: " + input);
    delete playersList[input];
    document.getElementById("kickInput").value = "";
}

function hslToRgb(h, s, l) {
    var r, g, b;

    if (s == 0) {
        r = g = b = l; // achromatic
    } else {
        var hue2rgb = function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function hexColorGen() {
    let hue = Math.random();
    let sat = Math.random() * 0.5 + 0.5;
    let lum = 0.5;

    var rgb = hslToRgb(hue, sat, lum);

    return "#" + (((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1));
}




function sendEmit(_event, data) { //send to all
    io.emit(_event, data);
}

function sendToSocketIDList(_event, socketidlist, data) {
    /*for (let socketid in socketidlist) {
                io.clients[socketid].emit(_event, data);
            }*/
    for (let socketid in socketidlist) {
        let id1234567890 = socketidlist[socketid];
        if (io.sockets.connected[id1234567890]) {
            io.sockets.connected[id1234567890].emit(_event, data);
        }
    }
}

function sendToSocketId(_event, data, targetsocket) {
    if (io.sockets.connected[targetsocket]) {
        io.sockets.connected[targetsocket].emit(_event, data);
    }

    //io.clients[targetsocket].emit(_event, data);
}
/*var server = expr.listen(port,function(){
    console.log("We have started our server on port "+port);
});*/

httpr.listen(port, function () {
    console.log('listening on ' + port);
    //getIP();
    //generateQRforIP();
});

require('electron').ipcRenderer.on('closeServer', function (event, data) {
    closeServer();
});

function closeServer() {
    httpr.close();
}

function getIP() {
    var address = "192.168.1.1";
    Object.keys(ifaces).forEach(function (ifname) {
        var alias = 0;

        ifaces[ifname].forEach(function (iface) {
            if ('IPv4' !== iface.family || iface.internal !== false) {
                // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
                return;
            }
            if (alias >= 1) {
                // this single interface has multiple ipv4 addresses
                console.log(ifname + ':' + alias, iface.address);
            } else {
                // this interface has only one ipv4 adress
                address = (address == "192.168.1.1") ? iface.address : address;
                console.log(ifname, iface.address);
            }
            ++alias;
        });
    });
    console.log(address);
    return address;
}

function updateIPtext(id) {
    let ipText = "http://" + getIP();
    ipText += (port != 80 && port != 8080) ? (":" + port) : "";
    document.getElementById(id).innerHTML = ipText;
}

function generate_qr_for_ip(id) {
    var text = "http://" + getIP() + ":" + port;
    //var text = "text bla bla"
    var code = qr.image(text, {
        type: 'png',
        ec_level: 'Q',
        parse_url: true,
        margin: 1
    }); //.pipe(file('qr.png'));
    //var code = qr.image('http://blog.nodejitsu.com', { type: 'png', ec_level: 'Q', parse_url: true,  margin: 1 }).pipe(process.stdout);
    console.log(code);
    var output = code.pipe(fs.createWriteStream(__dirname + '\\qr.png'));

    setTimeout(function () {
        document.getElementById(id).src = __dirname + "\\qr.png";
    }, 400);
    //code.pipe(output);
}
