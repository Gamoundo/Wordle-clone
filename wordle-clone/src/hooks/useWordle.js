import { useState } from "react"

const wordle = (solution) => {

const [turn, setTurn] = useState(0)
const [currentGuess, setCurrentGuess] = useState('')
const [guesses, setGuesses] = useState([])
const [history, setHistory] = useState([])
const [correct, setCorrect] = useState(false)





const formatGuess = () => {

let solutionArray = [...solution]
let formattedGuess = [...currentGuess].map((l) => {
    return {key: l, color: 'gray'}
})

formattedGuess.forEach((l, index) => {
    if(solutionArray[index] === l.key) {
        formattedGuess[index].color = 'green'
        solutionArray[index] = null
    }
})

formattedGuess.forEach((l, index) => {
    if(solutionArray.includes(l.key) && l.color !== 'green') {
        formattedGuess[index].color = 'yellow'
        solutionArray[index]= null
    }

    
})
setTurn(turn + 1)
return formattedGuess
}

const addGuess = () => {
   if(currentGuess === solution){
       setCorrect(true)
   }
}

const handleKeyUp = ({key}) => {
if (key === 'Enter') {
    //check against master list to make sure it's a word?
    if (turn > 5) {
        console.log("Guess time is over")
        return
    }

    if (history.includes(currentGuess)) {
        console.log("there are other words")
        return
    }

    if (currentGuess.length < 5) {
        console.log("Five. Letter. Words.")
        return
    }

  let formatted= formatGuess()

  console.log(formatted)
}


    if (key === 'Backspace') {
        setCurrentGuess((prev) => {
            return prev.slice(0, -1)
        })
        return
    }
if (/^[A-Za-z]$/.test(key)) {
    if(currentGuess.length < 5) {
        setCurrentGuess((prev) => {
            return prev + key
        })
    }
}

}

return {turn, currentGuess, guesses, correct, handleKeyUp}

}

export default wordle