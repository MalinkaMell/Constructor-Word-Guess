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

        this.arr.map(e => e.display).join(",");
        console.log(this.arr.map(e => e.display).join(" "));
    }
    //A function that takes a character as an argument and calls the guess function on each letter object 
    //(the second function defined in Letter.js)
    checkString(char) {
        this.arr.forEach(element => {
           //return element.checkChar(char);
           element.checkChar(char);
           //console.log(element);
           
        }); 
        
    }

}

module.exports = Word;

//const x = new Word("hey");
//console.log(x); 
/* console.log(x.checkString("h"));
console.log(x.wordString());
console.log(x.checkString("y"));
console.log(x.wordString());  */
/* Contains a constructor, Word that depends on the Letter constructor. 
This is used to create an object representing the current word the user is attempting to guess. 
That means the constructor should define:

 */