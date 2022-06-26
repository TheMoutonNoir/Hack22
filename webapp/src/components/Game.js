import React, { useState } from 'react';
import Choice from './Choice';
import Header from './Header';

function Game(){
    const [score, setScore] = useState(0)
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
        setScore(0)
    }

    return(
        <div>
            <Header scr={score}></Header>
            <Choice {...props} ></Choice>
        </div>
    )
}

export default Game