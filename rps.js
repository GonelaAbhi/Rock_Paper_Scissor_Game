let array = ['rock' ,'paper' ,'sessior'];
let win = 0;
let loss = 0;
let tie = 0;
let display = document.getElementById("display");
let displayScore = document.getElementById("display-score");
let winLoss = document.getElementById("win-loss");

function playGame(playerMove){
    let randomValue = Math.floor(Math.random() * 3);
    let computerMove = array[randomValue];


    display.innerHTML = `your move is : ${playerMove} <br>`;
    display.innerHTML += `computer move is : ${computerMove}`;



    if(playerMove === 'rock')
    {
        if(computerMove === 'rock'){
            tie++;
            console.log("you tie");
            winLoss.textContent = `Game is Tied`;
        }
        else if(computerMove === 'paper'){
            loss++;
            console.log("you loss");
            winLoss.textContent = `You Loss`;

        }
        else{
            win++;
            console.log("you won");
            winLoss.textContent = `You Won`;

        }
    }
    else if(playerMove === 'paper')
    {
        if(computerMove === 'paper'){
            tie++;
            console.log("you tie");
            winLoss.textContent = `Game is Tied`;


        }
        else if(computerMove === 'sessior'){
            loss++;
            console.log("you loss");
            winLoss.textContent = `You Loss`;


        }
        else{
            win++;
            console.log("you won");
            winLoss.textContent = `You Won`;


        }
    }
    else{
        if(computerMove === 'sessior'){
            console.log("you tie");
            tie++;
            winLoss.textContent = `Game is Tied`;

        }
        else if(computerMove === 'rock'){
            loss++;
            console.log("you loss");
            winLoss.textContent = `You Loss`;
        }
        else{
            win++;
            console.log("you won");
            winLoss.textContent = `You Won`;


        }
    }
    displayScore.innerHTML = `SCORE <br>`;
    displayScore.innerHTML += `WON : ${win} <br>`;
    displayScore.innerHTML += `LOSS : ${loss} <br>`;
    displayScore.innerHTML += `TIE : ${tie} <br>`;
    
}

function resetGame() {
    win = 0;
    loss = 0;
    tie = 0;
    display.innerHTML = '';
    winLoss.textContent = '';
    displayScore.innerHTML = 'SCORE <br>WON : 0 <br>LOSS : 0 <br>TIE : 0';
}
