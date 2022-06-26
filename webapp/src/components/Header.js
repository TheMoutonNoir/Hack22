import React, { useState } from 'react';
import Example from './Button'

function Header(){
    window.localStorage.setItem('highscore', '1')
    const [score, setScore] = useState(0)
    const [highscore, setHighscore] = useState(window.localStorage.getItem('highscore'))

    return (<div>
        <div class='container scorebg'>
            <h1 class="item" style={{textAlign: "start"}}>
                Score: { score }
            </h1>
            <svg class="item icon-i" xmlns="http://www.w3.org/2000/svg" width="86.667" height="86.667" viewBox="0 0 86.667 86.667">
                <path id="ic_info_outline_24px" d="M41,67h8.667V41H41ZM45.333,2A43.333,43.333,0,1,0,88.667,45.333,43.349,43.349,0,0,0,45.333,2Zm0,78A34.667,34.667,0,1,1,80,45.333,34.713,34.713,0,0,1,45.333,80ZM41,32.333h8.667V23.667H41Z" transform="translate(-2 -2)" fill="#fff"/>
            </svg>
            <h1 class="item" style={{textAlign: "end"}}>
                High Score: { highscore }
            </h1>
        </div>
        <Example></Example>
      </div>)
}

export default Header