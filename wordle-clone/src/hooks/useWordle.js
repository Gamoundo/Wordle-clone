import { useState } from "react"

const wordle = (solution) => {

const [turn, setTurn] = useState(0)
const [currentGuess, setCurrentGuess] = useState('')
const [guesses, setGuesses] = useState([])
const [history, setHistory] = useState([])
const [correct, setCorrect] = useState(false)





const formatGuess = () => {
console.log("formatting the guess", currentGuess)
}

const addGuess = () => {

}

const handleKeyUp = ({key}) => {
if (key === 'Enter') {
    
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

    formatGuess()
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