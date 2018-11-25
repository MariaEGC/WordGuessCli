var word = require("./word.js")
var inquirer = require("inquirer")
var prompt = require("prompt")
return module.exports

var lettersWithPlaceholders = []

var numberOfGuesses = 25

function Letter(lettersGuessed, lettersWithPlaceholders) {
    this.letterGuessed = letterGuessed
    this.lettersWithPlaceholders = lettersWithPlaceholders
}


var startGame = function() {

word.placeHolder()

    inquirer.prompt([{
        type: "input",
        message: 'Guess a letter!',
        validate: function(value) {
            if (isNaN(value) === true) {
                return true
            }
            return false
        },
    }, ]).then(function(res) {

        var letter = new Letter(res.letterGuessed)

        for (var i = 0; i < chosenWord.length; i++) {
            if (this.lettersInWord === this.letter) {

                this.letterGuessed = true
                console.log("Your letter guess " + res.letterGuessed + " is correct!")

            } else {
                console.log("Your letter guess " + res.letterGuessed + " is not correct! Guess again!")
            }
        }

        if (this.letterGuessed) {

            for (var j = 0; j < placeHolder.length; j++) {

                if (this.lettersInWord[j] === this.letter) {

                    this.placeHolder[j] = this.letter
                }
            }
            console.log(lettersWithPlaceholders)
        }
        numberOfGuesses++
        startGame()
    })
}

startGame()

function endGame() {

  if (lettersInWord.toString() === placeHolder.toString()) {
      alert("You win! PLease play again!")
      startGame()

  } else if (numberOfGuesses === 0) {

      inquirer.prompt([{
              type: 'input',
              message: 'You are now all out of guesses. Would you like to play again?',
              name: "confirm",
              default: true
          }, ])
          .then(function(err, res) {

              if (res.confirm) {
                  console.log("\nGreat, a new hangman game will begin!\n")
            
                  startGame()
              } else {
                  console.log("\nPlay again when you are ready!\n")
              }
          })
    }
}

endGame()