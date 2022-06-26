import React, { useState } from 'react';
import Choice from './Choice';
import Header from './Header';




function Game(){
    const [score, setScore] = useState(0)
    const [gameState, setGameState] = useState(0);
    //0 -> Main, 1 -> In Game, 2-> Lose
    const [highScore, setHighscore] = useState(0)

    let props = {
        increaseScore: increaseScore,
        loseScore: loseScore
    }

    function increaseScore(){
        setScore(score + 1)
    }

    function loseScore(){
        if(score > highScore || highScore == null) {
            setHighscore(score);
            window.localStorage.setItem('highScore', String(score))
        }
        
        setGameState(2);
    }

    function restartGame(){
        setGameState(1);
        setScore(0)
    }


    if(gameState == 2){
        return(
        <div id = {"GOBG"}>
        <h1 id = "GO">Game Over!</h1>
        <h2 id = "pmp">Practice makes perfect.</h2>
        <div id = "scores"><h1 id = "finalScore">Your final score: {score}</h1> <h1 id = "highScore">Your high score: {highScore}</h1></div>
        <div id = "Buttons"><button id = "PA" onClick = {restartGame}>Play Again</button> <button id = "MM" onClick = {() => setGameState(0)}>Main Menu</button></div>

    </div>
        );
    }else if(gameState == 1){
    return(
        <div>
            <Header scr={score}></Header>
            <Choice {...props} ></Choice>
        </div>
    )}else{

        return (
            <div className="startMenu">
                <h1 className="title">
                    HIGHER,
                    <br />
                    HIGHER!
                </h1>
                <div className="subtitleContainer">
                    <h2>Which action saves more tons of CO₂ per year?</h2>
                    <h3>
                        An interactive game which you can only beat by learning.
                    </h3>
                </div>
                <button className="play" onClick = {() => setGameState(1)}>Play!</button>
            </div>
        );
    }
}

export default Game