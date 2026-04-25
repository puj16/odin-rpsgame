const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const restart = document.getElementById("restart");
let playerScore=0;
let computerScore=0;

function getComputerChoice(playerSign) {
    const handSign = new Map([
        ["rock", "https://cdn.pixabay.com/photo/2012/04/16/11/07/rock-35522_1280.png"],
        ["paper", "https://cdn.pixabay.com/photo/2016/10/02/03/14/paper-1708865_1280.png"],
        ["scissors", "https://cdn.pixabay.com/photo/2012/04/26/18/43/scissors-42801_1280.png"]
    ]);
    const randomValue =Math.floor(Math.random() * 3);
    const computerSign = Array.from(handSign.keys())[randomValue];
    const result = document.querySelector("#result");
    const playerHand = document.querySelector("#player-hand");
    const computerHand = document.querySelector("#computer-hand");
    playerHand.src = handSign.get(playerSign);
    computerHand.src = handSign.get(computerSign);
    if(playerSign === computerSign){
        result.innerHTML = `<p>It's a tie!</p>`;
    }else if((playerSign ==="rock"&&computerSign==="scissors")||
             (playerSign ==="paper"&&computerSign==="rock")||
             (playerSign ==="scissors"&&computerSign==="paper")){
        result.innerHTML = `<p>You Win!</p>`;
        playerScore+=1; 
        document.querySelector("#player-score").innerHTML=`<p>Player's score: "${playerScore}"`;     
    }else{
        result.innerHTML = `<p>You Lose!</p>`;
        computerScore+=1;
        document.querySelector("#computer-score").innerHTML=`<p>Computer's score: "${computerScore}"`; 
    }
    if(playerScore>=5&&computerScore<5){
        document.querySelector("#score").innerHTML=`<p> Yo're the Winner!</p> `;
        playerScore=0;
        restart.style.display="block";
    }else if(computerScore>=5&&playerScore<5){
        document.querySelector("#score").innerHTML=`<p> You Lose!</p> `;
        computerScore=0;
        restart.style.display="block";
    }
}

rockButton.addEventListener("click", () => getComputerChoice("rock"));
paperButton.addEventListener("click", () => getComputerChoice("paper"));
scissorsButton.addEventListener("click", () => getComputerChoice("scissors"));
restart.addEventListener("click",()=> location.reload());