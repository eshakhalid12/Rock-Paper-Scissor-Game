
let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".select");
const msgParagraph = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Function to generate computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]; // Corrected "scissor" to "scissors"
    const ranIndx = Math.floor(Math.random() * 3);
    return options[ranIndx];
}

// Function for a draw game
const drawGame = () => {
    msgParagraph.innerText = "Game was draw! Try again :(";
    msgParagraph.style.backgroundColor = '#3C3D37';
}

// Function to show the winner
const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msgParagraph.innerText = `You Win :) , Your ${userChoice} beats ${compChoice}`;
        msgParagraph.style.backgroundColor = 'green';
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msgParagraph.innerText = `You Lose :( , ${compChoice} beats your ${userChoice}`;
        msgParagraph.style.backgroundColor = 'red';
    }
}

// Function to play the game
const playGame = (userChoice) => {
    console.log("User Choice:", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice:", compChoice);

    if(userChoice === compChoice) {
        drawGame();
    }
    else{
        let userWin = true;  // Changed to let so the value can be reassigned
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true; // Corrected spelling
        }
        else if(userChoice === "scissors") {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }    
}

// Function to generate user choice
choices.forEach((select) => {
    select.addEventListener("click", () => {
        const userChoice = select.getAttribute("id");
        playGame(userChoice);
    })
});


