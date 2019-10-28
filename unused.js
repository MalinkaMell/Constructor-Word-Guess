//all the unused or changed code is going here

//this was before i decided to go down the list instead of choosing random word
let arrLength = Object.keys(arrayOfWords).length; //finding the length of array by counting object keys

//let randomWord = arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)]; //random word - was that easy before i decided to complicate it
let randomNumber = Math.floor(Math.random() * arrLength); //decide a random  number
let randomWord = arrayOfWords[randomNumber].name;
let randomHint = arrayOfWords[randomNumber].hint;
let wordToGuess = new Word(randomWord);