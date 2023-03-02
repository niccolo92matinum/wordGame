import GuessResults from '../GuessResults/GuessResults'
import {range}  from '../../utils.js';
import {NUM_OF_GUESSES_ALLOWED}  from '../../constants.js';

import {useState} from 'react'

function Input({word, handleSubmit, list, setWord, answer,gameState}) {
  

  const handleInput = (e) => {
    setWord({ answer:e.target.value.toUpperCase(), id:Math.random() });
  };

 

 

  return (
    <div>
     
      <div className="guess-results">
       
            {range(NUM_OF_GUESSES_ALLOWED).map((num)=>{
              return(
                <GuessResults key={num} value={list[num]}  answer={answer}></GuessResults>
              )
            })}
   
      </div>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmfor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          disabled={gameState !== 'running'}
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          value={word.answer}
          onChange={(e) => handleInput(e)}
        />
      </form>
   
    </div>
  );
}

export default Input;
  