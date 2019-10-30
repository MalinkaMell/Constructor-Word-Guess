let Letter = require("./letter");
let {spaced} = require('letter-spacing');


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

        //so the problem was joining with space on 22, once removed the space everything worked like a charm
        //for nicer look going to use 'letter-spacing' library
        let newArr = this.arr
            .map(element => element.display) //create new array
            .join("") //tranform to string
            .toLowerCase() //to lower case just to be sure it's all lower
            .split(" ") // split it in words
            .map((element) => element.charAt(0).toUpperCase() + element.substring(1)) //add words to new array, 
            //and capitalize the first letter of EVERY word 
            .join(" "); // transform to string again

        console.log(spaced(newArr, 2));
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

