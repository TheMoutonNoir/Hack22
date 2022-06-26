import React from 'react';

const StartMenu = () => {
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
            <button className="play">Play!</button>
        </div>
    );
};

export default StartMenu;
