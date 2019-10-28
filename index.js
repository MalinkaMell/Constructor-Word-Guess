let inquirer = require("inquirer");
let Word = require("./word");
let colors = require('colors');

/* ==========   VARIABLES ========== */

//array of words objects - 'cause I always have to complicate things, huh? :D
let arrayOfWords = [
    {
        name: "brand new day",
        hint: "Ryan Star Song"
    },
    {
        name: "minority report",
        hint: "2002's Steven Spielberg Movie"
    },
    {
        name: "sheldon cooper",
        hint: "Bazinga!"
    },
    {
        name: "tom marvolo riddle",
        hint: "Lord Voldemort"
    },
    {
        name: "hey",
        hint: "short word"
    },
    {
        name: "cheshire cat",
        hint: "We Are All Mad Here!"
    }];
let arrLength = Object.keys(arrayOfWords).length; //finding the length of array by counting object keys
let wordIndex = 0; //starting with word at index 0
let wordToGuess = new Word(arrayOfWords[wordIndex].name); //word to guess
let count = 0; //counting guesses
let userGuesses = 3; //setting number of guesses
let guessedWords = 0;
let guessedLetters = [];


/* ==========   FUNCTIONS  ========== */

//this is the core game
function showWord() {
    if (count < userGuesses) { //counting guesses NEED TO IMPLEMENT NOT COUNT SAME WORD
        inquirer
            .prompt([
                {
                    name: "letter",
                    type: "input",
                    message: "Guess a letter"
                }
            ])
            .then(function (answers) {
                let guessed = answers.letter.toLowerCase();

                if (wordToGuess.word.includes(guessed)) {
                    console.log("\n");  //new line
                    console.log("CORRECT".brightGreen);

                } else {
                    console.log("\n");  //new line
                    console.log("INCORRECT".brightRed);
                }

                console.log("\n");  //new line
                wordToGuess.checkString(guessed); //checking if we have that letter

                wordToGuess.wordString(); //re-building the word array
                console.log(guessedLetters);

                //in order to NOT subtract a count from user if he guesses the same letter
                if (!guessedLetters.includes(guessed)) {
                    guessedLetters.push(guessed); // check in my array if letter is there, push if it's not, and increase counter
                    count++;
                }

                console.log("\n"); //new line
                console.log("Guesses used " + count + "/" + userGuesses);  //guesses used (i like it better than remaining guesses)
                console.log("\n"); //new line
                //checking if word is complete yet
                function checkWord(el) {
                    return (el.guessed === true);
                }
                //and if complete, congrats the user 
                if (wordToGuess.arr.every(checkWord) === true) {
                    console.log("Congrats! You've got it right!".brightYellow);
                    guessedWords++; //increasing guessed words count
                    wordIndex++; // increasing index in order to show next word
                    //checking if we still have word to guess
                    if (wordIndex < arrLength) {
                        //showing next word if we do
                        nextWord();
                    } else {
                        //game over if we don't
                        console.log("\n");
                        console.log(("Game Over! You have guessed " + guessedWords + "/" + arrLength + " words!").green);
                        console.log("\n");
                    }

                    return; //if the word is guessed - return, no  more recurring
                }
                showWord(); //recurring it's called?
            })

    } else {

        console.log("You are out of guesses!".brightRed); // finished ou guesses
        wordIndex++; // increasing index in order to show next word
        //checking if we still have word to guess
        if (wordIndex < arrLength) {
            //showing next word if we do
            nextWord();
        } else {
            //game over if we don't
            console.log("\n");
            console.log(("Game Over! You have guessed " + guessedWords + "/" + arrLength + " words!").green);
            console.log("\n");
        }
    }

}

//starting game
function startWord() {
    console.log("\n=== GUESS THE WORD GAME ===".brightGreen);
    console.log("============================".brightGreen);
    console.log("\n");
    console.log("HINT: ".brightGreen + arrayOfWords[wordIndex].hint.brightYellow); // show hint
    console.log("\n");
    wordToGuess.wordString(); //word to be displayed
    console.log("\n");
    showWord(); //starting game
}

//proceeding with the game
function nextWord() {

    wordToGuess = new Word(arrayOfWords[wordIndex].name); //next word to guess
    count = 0; // setting count to 0, restarting guesses
    console.log("\n===   +++  NEXT WORD  +++   ===".brightGreen);
    console.log("\n");
    console.log("HINT: ".brightGreen + arrayOfWords[wordIndex].hint.brightYellow);
    console.log("\n");
    wordToGuess.wordString();
    console.log("\n");
    showWord();
}

/* ==========   START GAME  ========== */

startWord();


