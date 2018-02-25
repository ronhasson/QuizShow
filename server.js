var fs = require('fs');
var os = require('os');
var ifaces = os.networkInterfaces();

var expr = require('express')();
var httpr = require('http').Server(expr);
var http = require('http');
var io = require('socket.io')(httpr);

var qr = require('qr-image');
//var file_loader = require("./apps/townofsalem/js/file_loader.js");

var playersSockets = [];
var playersData = [];

expr.get('/', function (req, res) {
    res.sendFile(__dirname + '/httpserver' + '/players_login.html');
});
expr.get('/screen', function (req, res) {
    res.sendFile(__dirname + '/httpserver' + '/screen.html');
});
expr.get(/^(.+)$/, function (req, res) {
    console.log(req);
    res.sendFile(__dirname + '/httpserver' + req.params[0]);
});
//file_loader.init(expr);
//file_loader.load_files();

const port = 80;

io.on('connection', function (socket) {
    console.log(socket.request.connection.remoteAddress + ' connected, and socket id is: ' + socket.id);

    // socketon. join: call fun. check playername avail.
    socket.on('join', function (player_name) {
        var playerNameAvailable = isPlayerNameAvailable(player_name);

        if (playerNameAvailable) {
            sendToSocketId('join_success', [player_name, hexColorGen()], socket.id);
            //players[player_name] = socket.id;
        } else {
            sendToSocketId('join_fail', player_name, socket.id);
        }
    });

    socket.on('connectUser', function (player_name) {
        console.log(player_name + ' redirected: ' + socket.id);
        playersSockets[player_name] = socket.id;
    });
});

// fun. check player name avail: if no living sockets with player name, then avail. if avail, call add player. If not, call inform unavil.
function isPlayerNameAvailable(player_name) {
    if (player_name in playersSockets && playersSockets[player_name] in io.sockets.sockets) { //check if io.sockets.connected is the right one instad of io.sockets.sockets
        return false;
    } else {
        return true;
    }
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







/*
  socket.on('requestFromServer', function(data) {
    window[data.action](data.data);
  });

  socket.on('join', function(uid) {
    addPlayer(uid, socket.id);
    console.log("on join");
  });
  socket.on('requestUserN', function(data) {
    console.log('raeched server.js');
    checkUserName(data);
  });
  */
/*
});

socket.on('connect', function(player_name) {
  players[player_name] = socket.id;
  document.getElementById('player_names').innerHTML = JSON.stringify(players, null, 4);
  console.log(players[player_name])
  sendToSocketId('connected', player_name, players[player_name])
});

function banana() {
  io.emit("bgColor", "red");
}
*/
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