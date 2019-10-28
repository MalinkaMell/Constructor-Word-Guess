let Letter = require("./letter");

class Word {
    constructor(word) {
        this.word = word;
        //An array of new Letter objects representing the letters of the underlying word
        this.arr = this.word.split("").map(element => {
            return new Letter(element);
        })
    }
    //A function that returns a string representing the word. This should call the function on each letter object 
    //(the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    wordString() {
        this.arr.forEach(element => {
            element.showLetter();
        });
        
       let myString = this.arr.map(e => e.display.charAt(0).toUpperCase() + e.display.slice(1)).join(" ");
      
        console.log(myString);
    }
    //A function that takes a character as an argument and calls the guess function on each letter object 
    //(the second function defined in Letter.js)
    checkString(char) {
        this.arr.forEach(element => {
            //return element.checkChar(char);
            element.checkChar(char);
        });

    }

}

module.exports = Word;

