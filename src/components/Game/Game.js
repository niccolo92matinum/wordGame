import React from 'react';
import { useState } from "react";

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input/Input'
import {NUM_OF_GUESSES_ALLOWED}  from '../../constants.js';
import Banner from '../Banner/Banner.js';

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {


  const [word, setWord] = useState({ answer: "" });
  const [list, setList] = useState([])
  const [gameState, setGameState] = useState('running')
console.log(gameState,'game', answer,word)
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newList = [...list,word]
    setList(newList)
    setWord({ answer: "" });
    
  if(answer ===  word.answer){
    setGameState('won')
  }else if(newList.length >= NUM_OF_GUESSES_ALLOWED ){
    setGameState('lose')
  }

  };
  return (
    <>
    
    <Input word={word} handleSubmit={handleSubmit} list={list} setWord={setWord} answer={answer} gameState={gameState} ></Input>
    <Banner gameState={gameState}></Banner>
    </>
  
    )
}

export default Game;
