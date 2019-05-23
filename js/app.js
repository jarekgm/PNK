let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const rock_div = document.getElementById('r');


function getComputerChoice(){
  const choices = ["p","s","r"];
  const randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];
}

function convertToWord(letter){
  if (letter === "r") return "Kamień";
  if (letter === "s") return "Nożyczki";
  return "Papier";

}

function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = convertToWord(userChoice) + " bije " + convertToWord(computerChoice) + "<BR><BR>  WYGRYWASZ !!!!  :) "
  scoreBoard_div.style.backgroundColor = "green";
}

function lose(userChoice, computerChoice){
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = convertToWord(userChoice) + " przegrywa z " + convertToWord(computerChoice) + "<BR><BR> PRZEGRYWASZ !!!! :( "
  scoreBoard_div.style.backgroundColor = "red";
}

function draw(userChoice, computerChoice){
  result_div.innerHTML = convertToWord(userChoice) + " remisuje z " + convertToWord(computerChoice) + "<BR><BR> JEST REMIS! "
  scoreBoard_div.style.backgroundColor = "grey";
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice){
    case "rs":
    case "sp":
    case "pr":
      win(userChoice, computerChoice);
    break;
    case "ps":
    case "rp":
    case "sr":
      lose(userChoice, computerChoice);
    break;
    case "rr":
    case "ss":
    case "pp":
      draw(userChoice, computerChoice);
    break;
  }
}



function main(){
  paper_div.addEventListener("click",function(){
    game("p");
  });

  scissors_div.addEventListener("click",function(){
    game("s");
  });

  rock_div.addEventListener("click",function(){
    game("r");
  });
};

main();
