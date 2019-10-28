let inquirer = require("inquirer");
let Word = require("./word");



let arrayOfWords = ["brand new day", "lost in the mist"]; //array of words
let randomWord = arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)]; //random word

let wordToGuess = new Word(randomWord);

console.log(randomWord);

let count = 0;
let userGuesses = 3;

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
                //checking if word is complete yet
                function checkWord(el) {
                    return (el.guessed === true);
                }
                //and if complete, congrats the user 
                if (wordToGuess.arr.every(checkWord) === true) {
                    console.log("congrats!");
                    return; // and stop everything
                }
                count++;
                console.log(" ");
                console.log("Guesses used " + count + "/" + userGuesses);
                console.log(" ");
                showWord();

            })

    } else {
        console.log("You are out of guesses");

    }

    // console.log(wordToGuess);
}

console.log("==== START GAME ===");
console.log("");
showWord();