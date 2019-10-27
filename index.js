let inquirer = require("inquirer");
//let inputChar = process.argv[2];
let Word = require("./word");

let wordToGuess = new Word("hellou"); // is this supposed to grab the word from an array of words?
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
            let letter =  wordToGuess.splitWord();
             let userGuess = answers.letter;
           
           
            for (let i = 0; i < letter.length; i++) {
                console.log(letter[i])
                console.log(letter[i])
              if (letter[i].checkChar(userGuess)) {
               console.log(true);
               // wordToGuess.wordString();
                
                }
                else {
                    console.log("boh");
                    
                }
            } 
            //console.log("letter: " + letter);
               // let checked = letter.checkChar(answers.letter);
                //console.log(checked);
                
               /*  letter.forEach(function (element, index) {
                    
                    element.checkChar(answers.letter);
                    element.guessed = true;
                    console.log(element.guessed +" "+ element.letter);
                    
                }) */
            /* 
                
  
             */
            count++;
            showWord();
        })
       
    }
    
   // console.log(wordToGuess);
}
showWord()
/*
function letterGuessed() { //set guessed property to true if guessed letter is present in our Letter Objects array
    for (let i = 0; i < wordToGuess.wordString().length; i++) {
            let letter = wordToGuess.splitWord()[i];
            letter.checkChar(inputChar);
        console.log(letter);
        letter.ifGuessed();
    }
} */

//letterGuessed();