let intervalID;

function randomizer(){
    var words = ['Rock', 'Paper', 'Scissor'];
    return words[Math.floor(Math.random()*words.length)];
}

function repeater(){
    intervalID = setInterval(() => {console.log(`The computer choose: ${randomizer()}`)} , 2000);
}

repeater();