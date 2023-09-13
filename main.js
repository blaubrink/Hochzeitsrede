const sentences = [
    ["Liebe(r/s) ", ","],
    ["Ich habe die Ehre, euch ", " zu wünschen."],
    ["Als ", " geschah, wusste ich, dass ihr füreinander bestimmt seid."],
    ["Wenn ich an Friederike denke, denke ich an ", "."],
    ["Wenn ich an Merlin denke, denke ich an ", "."],
    ["", " muss euch nicht peinlich sein."],
    ["Behaltet euer/eure(n) ", " immer bei!"],
    ["Euer/Eure ", "."]
];

const possibleAnswers = [
    "Friederike",
    "Merlin",
    "Brautpaar",
    "Familie",
    "Schwester",
    "Gemeinschaft",
    "Jesus",
    "Liebe",
    "Trauer",
    "Italien",
    "Urlaub",
    "Glück",
    "zu viel Alkohol",
    "Grillen",
    "Dummheit",
    "Sohn von Wolfgang Petri",
    "gemeinsame Zeit",
    "Playstation",
    "Pizza zum Mitnehmen",
    "Feminismus",
    "Herne-West",
    "Corona",
    "Jonas",
    "keine Rücksicht auf Verluste",
    "Faulheit",
    "edle Tropfen",
    "Verkehr",
    "offensiv ausgelebte Ahnungslosigkeit",
    "blindes Vertrauen",
    "nicht viel",
    "zu viel",
    "die Sprache der Tiere",
    "Don Papa",
    "Siesta bis 8 Uhr abends",
    "Deutschrap in Dauerschleife",
    "deine Mutter",
    "Kinder",
    "Katzen",
    "Vegetarier",
    "Diskussionen bis spät in die Nacht",
    "Eier",
    "realistische Erwartungen",
    "Gutscheine ohne Verfallsdatum",
    "ein halbvolles Bier",
    "gesunder Menschenverstand",
    "Hugo, der Boss",
    "eine plötzliche Veränderung",
    "ein verdammt schwerer Kühlschrank", 
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

const elWrapper = document.querySelector("#wrapper");
const elStartscreen = document.querySelector("#startscreen");
const elSelection = document.querySelector("#selection");
const elResult = document.querySelector("#result");
const elSentence = document.querySelector("#sentence");
const elAnswerContents = document.querySelectorAll(".answer > p");
const elResultSentences = document.querySelectorAll(".result-sentence");

elWrapper.style.transform = `scale(${window.innerHeight / 864})`;
console.log(window.innerHeight);

function startGame() {
    elWrapper.style.backgroundColor = "white";
    elStartscreen.style.display = "none";
    elSelection.style.display = "block";
}

function setNewSentence() {
    elSentence.innerHTML = sentences[round][0] + selectedAnswers[round] + sentences[round][1];

    const answers = returnAnswers();
    for (let i = 0; i < elAnswerContents.length; i++) {
        if (answers[i] === "ein halbvolles Bier" && (round === 0 || round === 6 || round === 7)) {
            answers[i] = "halbvolles Bier";
        } else if (answers[i] === "gesunder Menschenverstand" && (round === 1 || round === 3 || round === 4 || round === 6)) {
            answers[i] = "gesunden Menschenverstand";
        } else if (answers[i] === "Hugo, der Boss" && (round === 1 || round === 3 || round === 4 || round === 6)) {
            answers[i] = "Hugo, den Boss";
        } else if (answers[i] === "eine plötzliche Veränderung" && (round === 0 || round === 6 || round === 7)) {
            answers[i] = "plötzliche Veränderung"
        } else if (answers[i] === "ein verdammt schwerer Kühlschrank") {
            if (round === 0 || round === 7) {
                answers[i] = "verdammt schwerer Kühlschrank";
            } else if (round === 6) {
                answers[i] = "verdammt schweren Kühlschrank";
            } else if (round === 1 || round === 3 || round === 4) {
                answers[i] = "einen verdammt schweren Kühlschrank";
            }
        }

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
            if (selectedAnswers[i] === "Kinder" || 
            selectedAnswers[i] === "Katzen" || 
            selectedAnswers[i] === "Vegetarier" || 
            selectedAnswers[i] === "Diskussionen bis spät in die Nacht" || 
            selectedAnswers[i] === "realistische Erwartungen" ||
            selectedAnswers[i] === "Eier" ||
            selectedAnswers[i] === "Gutscheine ohne Verfallsdatum") {
                if (i === 2) {
                    sentences[i][1] = " geschahen, wusste ich, dass ihr füreinander bestimmt seid.";
                } else if (i === 5) {
                    sentences[i][1] = " müssen euch nicht peinlich sein.";
                }
            }

            elResultSentences[i].innerHTML = sentences[i][0] + selectedAnswers[i] + sentences[i][1];
        }

        elSelection.style.display = "none";
        elResult.style.display = "block";
    }
}

setNewSentence();