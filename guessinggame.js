const maxval = prompt("Enter a max number:");
const random = Math.floor(Math.random()*maxval)+1;
let guess = prompt("Guess the number");
while(true){
    if(guess==random){
        console.log("Congratulations!! You guess it correct.Random number was",random);
        break;
    }
    else if(guess=="quit"){
        console.log("You quit!!");
        break;
    }
    else if(guess>random){
        guess = prompt("Try again with lower values and guess the number");
    }
    else{ 
        guess = prompt("Try again with higher values and guess the number");
    }
}
