import React, { useState } from 'react';
import Choice from './Choice';
import Header from './Header';

function Game(){
    const [score, setScore] = useState(0)

    const increaseScore = () => setScore(score + 1)

    return(
        <div>
            <Header props={score}></Header>
            <Choice props={increaseScore}></Choice>
        </div>
    )
}

export default Game