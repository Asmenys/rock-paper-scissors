let rpc=["Rock","Paper","Scissors"];
let playercount=0;
let computercount=0;

//Randomly selects a member of rpc array
function computerPlay()
{
return Math.floor(Math.random()*3);
}


//This loop calls playRound() 5 times and then increments either playercount or computercount depending on the value returned by playRound().
for(let i=1;i<=5;i++)
{
playerSelection = window.prompt("Rock, paper or scissors?");
let results=playRound(playerSelection);


if(results == "You win!")
    {   console.log("You win!")
        playercount++}
    else if(results == "You lose!")
        { console.log("You lose!")
            computercount++}
        else console.log("It's a DRAW!")


 //This function takes an input and compares it to the output from computerPlay()
    function playRound(playerSelection){
let computerSelection=rpc[computerPlay()];
console.log(`You have chosen ${playerSelection.toLowerCase()} and the computer has drawn ${computerSelection}!`);
    if(computerSelection.toLowerCase() == playerSelection.toLowerCase())
    {return "Its a DRAW"}
    else if(computerSelection == "Rock" && playerSelection.toLowerCase() == "paper")
    {return "You win!"}
    else if(computerSelection == "Paper" && playerSelection.toLowerCase() == "scissors")
    {return "You win!"}
    else if(computerSelection == "Scissors" && playerSelection.toLowerCase() == "rock")
    {return "You win!"}
    else return "You lose!";
    }
}

//This check compares the results of playRound()
if (playercount>computercount)
    {console.log("You won!")}
    else if (playercount == computercount)
    {console.log("It's a DRAW!")}
    else console.log("You lose!")