var inquirer = require("inquirer")
var prompt = require("prompt")

var wordSelection = ["ho oh", "lugia", "mew", "cresselia", "reshiram", "silvally", "cosmog", "necrozma",
    "mewtwo", "entei", "latias", "regigigas", "giratina", "zekrom", "zygarde", "solgaleo", "lunala",
    "latios", "kyogre", "groudon", "raquaza", "dialga", "palkia", "kyurem", "xerneas", "yveltal"
]

var chosenWord = wordSelection[Math.floor(Math.random() * wordSelection.length)]
var spaceHolder = []
var lettersInWord = chosenWord.split("")
var letterGuessed = ""
var lettersInWordLength = lettersInWord.length
var numberOfGuesses = lettersInWordLength

function Word(chosenWord, spaceHolder, lettersInWordLength, letterGuessed, lettersInWord) {
    this.chosenWord = chosenWord
    this.spaceHolder = spaceHolder
    this.lettersInWordLength = lettersInWordLength
    this.lettersInWord = lettersInWord
    this.letterGuessed = letterGuessed 
};

Word.prototype.placeHolder = function() {
    for (var i = 0; i < lettersInWordLength; i++) {
        spaceHolder.push("__")
    }
    console.log(spaceHolder.join(" "))
}

var word = new Word(chosenWord, letterGuessed, lettersInWord)

word.placeHolder()

var startGame = function() {
  inquirer.prompt([{
    name: "currentguess",
    type: "input",
    message: 'Guess a letter!',
    validate: function(value) {
        if (isNaN(value) === true) {
          console.log('true')
          return true
        }
        console.log('false')
        return false
    }

  }]).then(function(res) {
    console.log("res: ", res)
    letterGuessed = res.currentguess

    console.log("letterGuessed: ", letterGuessed)
    console.log("Number of Guesses: ", numberOfGuesses)
    console.log("Hangman Word: ", spaceHolder)
   
      for (var i = 0; i < lettersInWord.length; i++)
        {   
          if (lettersInWord[i] === letterGuessed) 
          {
              spaceHolder[i] = letterGuessed;
              console.log(letterGuessed + " is correct!")
            
            } else {
              console.log(letterGuessed + " is incorrect!")
              }    
            }
          numberOfGuesses--
          console.log("Your Hangman: ", spaceHolder.join(' '))
          console.log(numberOfGuesses + "number of guesses remaining!")
          startGame()
          endGame()
          })
        }

var endGame = function() {

  if (spaceHolder.toString() === lettersInWord.toString()) 
    {
      console.log(spaceHolder.toString(), lettersInWord.toString()) 
      console.log("You win! PLease play again!")
      startGame()

  } else if (numberOfGuesses === 0) 
    {
    inquirer.prompt([{
        type: 'input',
        message: 'You are now all out of guesses. Would you like to play again?',
        name: "confirm",
        default: false
    }, ])
    .then(function(res) {

        if (res.confirm) {
            console.log("\nGreat, a new hangman game will begin!\n")
            startGame()
        } else {
            console.log("\nPlay again when you are ready!\n")
        }
    })
  }
}

startGame()
endGame()