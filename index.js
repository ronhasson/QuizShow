var olqlist = document.getElementById("olqList");
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
    let anstext = document.createTextNode(element.q_answers[0]);
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

function markDone(i) {
    let arr = document.getElementsByClassName("q" + i);
    for (let j = 0; j < arr.length; j++) {
        arr[j].classList.add("qdone");
    }
}

var oq; //original question unsuffeld
var nq; //suffeld question - sent to players

function sendQuestion() {
    let i = document.getElementById("qInput").value;
    if (i == undefined) {
        return;
    }
    document.getElementById("qInput").value = "";
    document.getElementsByClassName("q" + i)[0].scrollIntoView();

    oq = questionsList[i];
    nq = JSON.parse(JSON.stringify(oq));
    shuffleArray(nq.q_answers);
    console.log(oq);
    console.log(nq);

    io.emit("newQuestion", nq);
    markDone(i);
}

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
    //var np = [];
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
        let qtext = document.createTextNode(" " + element[0] + ": " + element[1]);
        elem.appendChild(qtext);
        vPlayerlist.appendChild(elem);
    });
}