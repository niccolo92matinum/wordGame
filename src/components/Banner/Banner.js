import React from "react";

function Banner({gameState}){

  if(gameState === 'lose'){
    return(
      <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>LEARN</strong>.
      </p>
    </div>
    )}else if(gameState === 'won'){
      return(
      <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>3 guesses</strong>.
      </p>
    </div>
    )
  }
  
}

export default Banner;
