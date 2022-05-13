import { useState } from "react"

const wordle = (solution) => {

const [turn, setTurn] = useState(0)
const [currentGuess, setCurrentGuess] = useState('')
const [guesses, setGuesses] = useState([])
const [history, setHistory] = useState([])
const [correct, setCorrect] = useState(false)





const formatGuess = () => {

}

const addGuess = () => {

}

const handleKeyUp = ({key}) => {
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