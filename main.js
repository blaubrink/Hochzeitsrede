const sentences = [
    ["Liebe ", ","],
    ["Ich habe die Ehre, euch ", " zu wünschen."],
    ["", " war der Moment als ich wusste, dass ihr füreinander bestimmt seid."],
    ["Was mich an ", " so fasziniert, ..."],
    ["... ist die bedingungslose ", "."],
    ["", " muss euch nicht peinlich sein."],
    ["Bleibt immer so ", " wie ihr seid."],
    ["Euer/Eure ", "."]
];

const possibleAnswers = [
    "Friederike", "Merlin", "Brautpaar", "Kinder", "Familie", "Schwester", "Gemeinschaft", "Jesus",
    "Liebe", "Trauer", "Italien", "Urlaub", "Glück", "zu viel Alkohol", "Grillen", "Katzen",
    "Hund", "Pferd", "Fisch", "Hamster", "Löwe", "Elephant", "Giraffe", "Fuchs",
    "Eule", "Igel", "Kuh", "Schaf", "Huhn", "Adler", "Papagei", "Maus",
    "Zebra", "Wal", "Hai", "Delfin", "Oktopus", "Blaumeise", "Amsel", "Schwein",
    "Karotte", "Kartoffel", "Kohl", "Radieschen", "Lauch", "Rettich", "Tomate", "Paprika"
];

const selectedAnswers = [
    "________",
    "________",
    "________",
    "________",
    "________",
    "________",
    "________",
    "________"
];

let round = 0;

const elStartscreen = document.querySelector("#startscreen");
const elSelection = document.querySelector("#selection");
const elResult = document.querySelector("#result");
const elSentence = document.querySelector("#sentence");
const elAnswerContents = document.querySelectorAll(".answer > p");
const elResultSentences = document.querySelectorAll(".result-sentence");

function startGame() {
    document.body.style.backgroundColor = "white";
    elStartscreen.style.display = "none";
    elSelection.style.display = "block";
}

function setNewSentence() {
    elSentence.innerHTML = sentences[round][0] + selectedAnswers[round] + sentences[round][1];

    const answers = returnAnswers();
    for (let i = 0; i < elAnswerContents.length; i++) {
        elAnswerContents[i].innerHTML = answers[i];
    }
}

function returnAnswers() {
    const answers = [];
    for (let i = 0; i < 6; i++) {
        const r = Math.floor(Math.random() * possibleAnswers.length);
        answers.push(possibleAnswers[r]);
        possibleAnswers.splice(r, 1);
    }
    return answers;
}

function setAnswer(number) {
    selectedAnswers[round] = elAnswerContents[number].innerHTML;
    round++;
    if (round < 8) {
        setNewSentence();
    } else {
        for (let i = 0; i < elResultSentences.length; i++) {
            elResultSentences[i].innerHTML = sentences[i][0] + selectedAnswers[i] + sentences[i][1];
        }

        elSelection.style.display = "none";
        elResult.style.display = "block";
    }
}

setNewSentence();