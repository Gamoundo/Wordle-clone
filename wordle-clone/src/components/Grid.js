import React from 'react'
import Row from './Row'

export default function Grid( {guesses, turn, currentGuess}) {
  return (
    <div>
        {guesses.map((g, i) => {
            if (turn === i) {
                return <Row currentGuess={currentGuess} key={i} />
            }
            
            return <Row key={i}  guess={g}/>
        })}
    </div>
  )
}
