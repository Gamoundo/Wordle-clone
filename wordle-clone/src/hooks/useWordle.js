import { useState } from "react"

const wordle = (solution) => {

const [turn, setTurn] = useState(0)
const [currentGuess, setCurrentGuess] = useState('')
const [guesses, setGuesses] = useState([...Array(6)])
const [history, setHistory] = useState([])
const [correct, setCorrect] = useState(false)
const [lett, setLett] =useState(
    {
        q: '',
        w: '',
        e: '',
        r: '',
        t: '',
        y: '',
        u: '',
        i: '',
        o: '',
        p: "",
        a:'',
        s:'',
        d:'',
        f:'',
        g:'',
        h:'',
        j:'',
        k:'',
        l:'',
        z:'',
        x:'',
        c:'',
        v:'',
        b:'',
        n:'',
        m:''

    }
      
    
  )





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
        solutionArray[solutionArray.indexOf(l.key)]= null
    }

    
})

return formattedGuess
}

const addGuess = (formattedGuess) => {
   if(currentGuess === solution){
       setCorrect(true)
       

   }
   setGuesses((prev) => {
    let guessList = [...prev]
    guessList[turn] = formattedGuess
    return guessList
})
setHistory((prevHist) => {
    return [...prevHist, currentGuess]
})
setTurn(turn + 1)
setLett((prevLetters) => {
  let newL={...prevLetters}
  formattedGuess.forEach((l) => {
      const curColor = newL[l.key]

      if(l.color === 'green') {
          newL[l.key] = 'green'
          return
      }
      if(l.color === 'yellow' && curColor !== 'green') {
          newL[l.key] = 'yellow'
          return
      }

      if(l.color === 'gray' && curColor !== 'green' && curColor !== 'yellow') {
          newL[l.key] = 'gray'
          return
      }

      

  })
  return newL
})
setCurrentGuess('')
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
  addGuess(formatted)
  
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

return {turn, currentGuess, guesses, correct, lett, handleKeyUp}

}

export default wordle