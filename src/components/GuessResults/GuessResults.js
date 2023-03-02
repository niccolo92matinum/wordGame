import React from "react";
import {range}  from '../../utils.js';
import {checkGuess} from '../../game-helpers.js';



function GuessResults({value, answer}) {

 
const input = (value || {answer: ''}).answer



  return (
    <div className="guess-results">
            <p  className="guess">
             {range(5).map((num) =>{

              const check = checkGuess(input,answer)
             
             
                return(
               
                  <span key={num} className={`cell ${check?check[num].status:undefined}`}>{input? input[num]:undefined}</span>
                )
              
             })}
             
          </p>
          

 
  
  
</div>
  );
}

export default GuessResults;
