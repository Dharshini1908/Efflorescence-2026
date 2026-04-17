function openEvent(event) {

    let details = {
        paper: "Paper Presentation\n\nRules:\n- Max 2 members\n- 5 mins time",
        quiz: "Technical Quiz\n\nRules:\n- Individual or team",
        hack: "Hack & Hunt\n\nSolve clues and code",
        mini: "Mini Hackathon\n\nBuild project in limited time",
        code: "Crack the Code\n\nDebug and solve",
        dance: "Dance Event\n\nSolo or group",
        sing: "Singing Event",
        beat: "Chase the Beat",
        puzzle: "Solve the Puzzle",
        hunt: "Pressure Hunt"
    };

    alert(details[event]);
}
var eventDate = new Date("April 29, 2026 09:00:00").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();
    var distance = eventDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance / (1000 * 60 * 60)) % 24);

    document.getElementById("countdown").innerHTML =
        "⏳ " + days + " Days " + hours + " Hours Left";

}, 1000);