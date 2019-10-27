let inquirer = require("inquirer");
//let inputChar = process.argv[2];
let Word = require("./word");

let wordToGuess = new Word("hellou"); // is this supposed to grab the word from an array of words?
let count = 0;
let userGuesses = 8;

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
                let guessed = answers.letter;
                wordToGuess.checkString(guessed);
                wordToGuess.wordString();

                function checkWord(el) {
                    return (el.guessed === true);
                }

                if (wordToGuess.arr.every(checkWord) === true) {
                    console.log("congrats!");

                }



                count++;
                showWord();

            })

    } else {
        console.log("You are out of guesses");

    }

    // console.log(wordToGuess);
}


showWord();