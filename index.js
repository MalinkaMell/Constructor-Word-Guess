let inquirer = require("inquirer");
let Word = require("./word");

//array of words objects - 'cause I always have to complicate things, huh? :D
let arrayOfWords = [
    {
        name: "brand new day",
        hint: "ryan star song"
    },
    {
        name: "minority report",
        hint: "Steven Spielberg movie"
    }];

let arrLength = Object.keys(arrayOfWords).length; //finding the length of array by counting object keys

let wordIndex = 0; //starting with word at index 0

let wordToGuess = new Word(arrayOfWords[wordIndex].name); //word to guess

let count = 0; //counting guesses
let userGuesses = 3; //setting number of guesses

//this is the core game
function showWord() {
    if (count < userGuesses) {
        inquirer
            .prompt([
                {
                    name: "letter",
                    type: "input",
                    message: "Guess a letter"
                }
            ])
            .then(function (answers) {
                console.log("\n");
                let guessed = answers.letter;
                wordToGuess.checkString(guessed);
                wordToGuess.wordString();
                //checking if word is complete yet
                function checkWord(el) {
                    return (el.guessed === true);
                }
                //and if complete, congrats the user 
                if (wordToGuess.arr.every(checkWord) === true) {
                    console.log("congrats!");
                    wordIndex++;
                    console.log(wordIndex);
                    //startWord();
                    return; // and stop everything
                }
                count++;
                console.log("\n");
                console.log("Guesses used " + count + "/" + userGuesses);
                console.log("\n");
                showWord();
                // console.log("\n");
            })

    } else {
        console.log("You are out of guesses");

        wordIndex++;
        console.log(wordIndex);
        if (wordIndex < arrLength) {
            nextWord();
        }
    }

    // console.log(wordToGuess);
}

function startWord() {
    console.log("\n=== GUESS THE WORD GAME ===");
    console.log("\n");
    console.log("HINT: " + arrayOfWords[wordIndex].hint);
    console.log("\n");
    wordToGuess.wordString();
    console.log("\n");
    showWord();
}

function nextWord() {
    count = 0;
    wordToGuess = new Word(arrayOfWords[wordIndex].name); //word to guess
    console.log("\n=== GUESS THE WORD GAME NEXT ===");
    console.log("\n");
    console.log("HINT: " + arrayOfWords[wordIndex].hint);
    console.log("\n");
    wordToGuess.wordString();
    console.log("\n");
    showWord();
}

startWord()


