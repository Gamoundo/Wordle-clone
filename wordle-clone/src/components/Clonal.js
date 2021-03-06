import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Modal from './Modal'

export default function Clonal( { solution }) {

    const {currentGuess, turn, guesses, correct, lett, handleKeyUp}=useWordle(solution)

    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
      window.addEventListener('keyup', handleKeyUp)
    
      if(correct) {
        console.log('winner')
        window.removeEventListener('keyup', handleKeyUp)
        setTimeout(() => {
          setShowModal(true) 
        }, 2000);
        
      }

      if(turn > 5){
        console.log("Guess time is over")
        window.removeEventListener('keyup', handleKeyUp)
        setTimeout(() => {
          setShowModal(true) 
        }, 2000)
      }


      return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp, turn, correct])
    
    

    const [letters, setLetters] =useState(
      [
        {key: 'q'},
        {key: 'w'},
        {key: 'e'},
        {key: 'r'},
        {key: 't'},
        {key: 'y'},
        {key: 'u'},
        {key: 'i'},
        {key: 'o'},
        {key: 'p'},
        {key: 'a'},
        {key: 's'},
        {key: 'd'},
        {key: 'f'},
        {key: 'g'},
        {key: 'h'},
        {key: 'j'},
        {key: 'k'},
        {key: 'l'},
        {key: 'z'},
        {key: 'x'},
        {key: 'c'},
        {key: 'v'},
        {key: 'b'},
        {key: 'n'},
        {key: 'm'},
      ]
    )

  return (
    <div>
      
        <div> number of turns: {turn}</div>
        
        
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
      <div className='keypad'>
      {letters.map((l) => {
        const color = lett[l.key]
      return  <div key={l.key} className={color}>{l.key}</div>
      })}
      </div>
      {showModal && <Modal  turn={turn} correct={correct} solution={solution}/>}
    </div>
    
  )
}
