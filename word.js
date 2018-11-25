var inquirer = require("inquirer")
var prompt = require("prompt")
var letter = require("./letter.js")

var wordSelection = ["ho oh", "lugia", "mew", "cresselia", "reshiram", "silvally", "cosmog", "necrozma",
    "mewtwo", "entei", "latias", "regigigas", "giratina", "zekrom", "zygarde", "solgaleo", "lunala",
    "latios", "kyogre", "groudon", "raquaza", "dialga", "palkia", "kyurem", "xerneas", "yveltal"
]

var chosenWord = ""

var spaceHolder = "__"

var lettersInWord = []

function Word(chosenWord, spaceHolder, lettersInWord) {
    this.chosenWord = chosenWord
    this.spaceHolder = spaceHolder
    this.lettersInWord = lettersInWord
}

Word.prototype.placeHolder = function() {

    this.chosenWord = wordSelection[Math.floor(Math.random() * wordSelection.length)]
    this.lettersInWord = chosenWord.split("")
    this.spaceHolder = lettersInWord.length

    for (var i = 0; i < lettersInWord.length; i++) {
        spaceHolder += lettersInWord.length
    }
    console.log(this.spaceHolder)
}


var word = new Word(chosenWord, spaceHolder, lettersInWord)

word.placeHolder()

module.exports = wordSelection
module.exports = Word
module.exports = word