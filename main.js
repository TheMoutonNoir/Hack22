let highScore = 0;
let currentScore = 0;


const choice1Text = document.getElementById('choice1Text');
const choice2Text = document.getElementById('choice2Text');
const choice3Image = document.getElementById("choice1Image");

const choice1Value = document.getElementById('choice1Value');
const choice2Value = document.getElementById('choice2Value');
const choice2Image = document.getElementById("choice2Image");


//Data is: name, value, URL
const data = [
    {
        name: 'Riding a bike instead of driving',
        value: 100,
    },
    {
        name: 'Eating vegetables instead of meat',
        value: 50,
    },
    {
        name: 'A',
        value: 2,
    },
    {
        name: 'B',
        value: 3,
    },
    {
        name: 'C',
        value: 5,
    },
    {
        name: 'D',
        value: 5,
    },
    {
        name: 'E',
        value: 6,
    },
];

function startGame() {
    id1 = randomIdFromData();
    game += [id1];
    id2 = randomIdFromData();
    while (game.includes(id2)) {
        id2 = randomIdFromData();
    }
    

    choice1Text.textContent = data[id1].name;
    choice1Value.textContent = data[id1].value;
    

    choice2Text.textContent = data[id2].name;
}

function pick(choiceNumber) {
    revealChoice2();
    

}


function randomizeNext(id2){



}



function randomIdFromData() {
    return Math.floor(Math.random() * data.length);
}

function revealChoice2() {
    choice2Value.textContent = data[id2].value;
}

function win() {
    currentScore += 1;
    if (score > highScore) highScore = currentScore;
}
