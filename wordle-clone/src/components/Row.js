import React from 'react'

export default function Row({guess, currentGuess}) {
  
    if (guess) {
        return (
            <div className='row'>
               {guess.map((l, i) => {
                  return <div key={i} className={l.color}> {l.key}</div>
               })}
           </div>
         )  
    }
    
    if(currentGuess) {
        let letters=currentGuess.split('')
        return(
            <div className='row'>
                {letters.map((l,i) => {return <div key={i} className='filled'> {l}</div> })}
                {[...Array(5 - letters.length)].map((v,i) => {
                    return <div key={i}></div>
                }
                
                )}
            </div>
        )
    }

    return (
        <div className='row'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
