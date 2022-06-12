const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const imageComputer = document.getElementById('computer.jpg')
const imageHuman = document.getElementById('human.jpg')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
} ))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1){
        computerChoice = 'rock'

    }
    if (randomNumber === 2){
        computerChoice = 'scissors'
    }
    if (randomNumber === 3){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === userChoice)
    result= 'Its a Draw!'

    if (computerChoice === 'rock' & userChoice === "scissors")
    result= 'The Computer Wins!'
    
    if (computerChoice === 'rock' & userChoice === "paper")
    result= 'You Win!'

    if (computerChoice === 'paper' & userChoice === "scissors")
    result= 'You Win!'

    if (computerChoice === 'paper' & userChoice === "rock")
    result= 'The Computer Wins!'
    
    if (computerChoice === 'scissors' & userChoice === "paper")
    result= 'The Computer Wins!'

    if (computerChoice === 'scissors' & userChoice === "rock")
    result= 'You Win!'

    resultDisplay.innerHTML = result
}

