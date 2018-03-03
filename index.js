function markDone(i) {
    let arr = document.getElementsByClassName("q" + i);
    for (let j = 0; j < arr.length; j++) {
        arr[j].classList.add("qdone");
    }

    questionsList[i].done = true;
}

var oq; //original question unsuffeld
var nq; //suffeld question - sent to players
var lastQuestionType;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

setInterval(updatePlayersListView, 2000);
var np = [];

function updatePlayersListView() {
    var op = playersList;
    np = [];
    for (var name in op) {
        np.push([name, op[name].score]);
    }
    np.sort(function (a, b) {
        return parseInt(b[1]) - parseInt(a[1]);
    });
    //console.log(np);
    var vPlayerlist = document.getElementById("cPlayersList");
    vPlayerlist.innerHTML = "";
    np.forEach((element, i) => {
        let elem = document.createElement("li");
        let statspan = document.createElement("span");
        let stat = (isPlayerConnected(np[i][0])) ? "@" : "X";
        let itext = document.createTextNode("[" + stat + "]");
        statspan.appendChild(itext);
        let statclass = (isPlayerConnected(np[i][0])) ? "connected" : "disconnected";
        statspan.classList.add(statclass);
        elem.appendChild(statspan);
        let qtext = document.createTextNode(" " + element[0] + ": " + element[1] + " ");
        elem.appendChild(qtext);

        vPlayerlist.appendChild(elem);
    });
}
