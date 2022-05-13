const player = {
    playerName: "Jim",
    playerChips: 150
}

const btnStart = document.querySelector("#btn-start");
const subHeader = document.getElementById("sub-header");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.querySelector("#cards-el"); //Query selector is a dynamic way of selecting an element. 
                                                   //Similar to getElementById. Use hashtag or dot just like css.
                                                   //Can Access classes and whole elements as well. 



const playerEl = document.getElementById("player-el");
playerEl.textContent = player.playerName + ": $" + player.playerChips;


let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let gameStarted = false;
let message = "";
let arrCards = []; //ordered List of items


const generateRandomCard = () => {
    
    const randomCard = Math.floor(Math.random()*13)+1; //Returns random integer from 1 to 13
    
    if(randomCard>=10 && randomCard<=13){
        return 10;

    }else if(randomCard===1){
        return 11;
    }else{
        return randomCard;
    }
 
}


const startGame = () => { 

    

    btnStart.disabled = true;
    isAlive = true;
    const firstCard = generateRandomCard(); //Returns random integer from 1 to 13
    const secondCard = generateRandomCard();
    sum = firstCard+secondCard;
    arrCards.push(firstCard , secondCard);

    
    renderGame();  
  
}


const renderGame = () =>{

    cardsEl.textContent = "Cards: " + arrCards.toString();

    sumEl.textContent = "Sum: " + sum;
    

    if (sum < 21){
        message = "Do you want to draw a new card?";
    }else if (sum === 21){
        message = "You've got Blackjack";
        hasBlackJack = true;
    }else {
        message = "🤬 Bust 🤬";
        isAlive = false;
    }
    
    subHeader.textContent = message;

}

const newCard = () => {
   

    if(isAlive===false || hasBlackJack===true){
    
        console.log("Please Start Game...")

    }else{
        console.log("Drawing new card from deck");
        const card = generateRandomCard();
        arrCards.push(card);
        sum += card;
        renderGame();

    }
    
}

const restartGame = () =>{
    if(isAlive===false || hasBlackJack===true){
   
        window.location.reload();
    }
}
