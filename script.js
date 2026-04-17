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