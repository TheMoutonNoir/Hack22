import React, { useState } from 'react';
import Choice from './Choice';
import Header from './Header';




function Game(){
    const [score, setScore] = useState(0)
    const [lose, setLose] = useState(false);
    // const [highscore, setHighscore] = useState(0)

    let props = {
        increaseScore: increaseScore,
        loseScore: loseScore
    }

    function increaseScore(){
        setScore(score + 1)
    }

    function loseScore(){
        if(score > window.localStorage.getItem('highscore')) window.localStorage.setItem('highscore', score)
        
        setLose(true);
    }

    function restartGame(){
        setLose(false);
        setScore(0)
    }


    if(lose){
        return(
        <div id = {"GOBG"}>
        <h1 id = "GO">Game Over!</h1>
        <h2 id = "pmp">Practice makes perfect.</h2>
        <div id = "scores"><h1 id = "finalScore">Your final score: {score}</h1> <h1 id = "highScore">Your high score: {score}</h1></div>
        <div id = "Buttons"><button id = "PA" onClick = {restartGame}>Play Again</button> <button id = "MM">Main Menu</button></div>

    </div>
        );
    }else{
    return(
        <div>
            <Header scr={score}></Header>
            <Choice {...props} ></Choice>
        </div>
    )}
}

export default Game