
class Letter {
    //Contains a constructor, Letter. 
    //This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), 
    //depending on whether or not the user has guessed the letter. 
    //That means the constructor should define:
    constructor (letter) {
        this.guessed = false; //A boolean value that stores whether that letter has been guessed yet
        this.display = "_"; // placeholder
        this.letter = letter; //A string value to store the underlying character for the letter
    }
    //A function that returns the underlying character if the letter has been guessed, 
    //or a placeholder (like an underscore) if the letter has not been guessed
    showLetter() {
        if (this.guessed === true) {
            this.display = this.letter;
           // console.log(">letter.js :: showLetter :: " + this.display);
        }
    }
    //A function that takes a character as an argument and checks it against the underlying character, 
    //updating the stored boolean value to true if it was guessed correctly
    checkChar(char) {
        if (char === this.letter) {
            this.guessed = true;
           // console.log(">letter.js :: checkChar :: " + this.guessed);
        }
    }

}

module.exports = Letter;

/* THIS IS TEST AND IT"S WORKING PROPERLY!
REMEMBER: THE STATUS TRUE OR FALSE IS ALREADY UPDATED FROM HERE!
let letter = new Letter("h"); // new letter
letter.checkChar("h"); // outputs true
letter.checkChar("a"); // outputs false
console.log(letter); // log object
 */