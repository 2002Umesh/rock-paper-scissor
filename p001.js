const buttons=document.querySelectorAll("button");
const game=document.querySelector(".game");
const winner=document.querySelector(".winner");
const you=document.querySelector(".you");
const pscore = document.getElementById("pscore");
const cscore = document.getElementById("cscore");
const result=document.getElementById("result");

for (let i=0;i<buttons.length;i++){
buttons[i].addEventListener('click',Game);
}

let playerScore=0;
let compScore=0;
function Game(e){
    let youChoose=e.target.innerText;
      you.innerText="You choose "+youChoose+"!!!";
    let compChoose=Math.random();

    if (compChoose<0.34){
        compChoose="Rock";
        game.innerText="Computer choose Rock!!!";
    }else if(compChoose<=0.67){
        compChoose="Paper";
        game.innerText="Computer choose Paper!!!";
    }else{
        compChoose="Scissor";
        game.innerText="Computer choose Scissor!!!";
    }
    Winner(youChoose,compChoose);
}

function Winner(youChoose,compChoose){
    if(youChoose===compChoose){
        winner.innerText="Its a Draw!!!";
    }else{
    if(youChoose==='Rock'){
        if(compChoose==='Paper'){
        winner.innerText="You lose!!!";
        compScore+=1;
        cscore.innerText=`COMPUTER SCORE:-${compScore}`;
    }else{
        winner.innerText="You win!!!";
        playerScore+=1;
        pscore.innerText=` PLAYER SCORE :- ${playerScore}`;
        }
    }
    if(youChoose==='Paper'){
        if(compChoose==='Scissor'){
        winner.innerText="You lose!!!";
        compScore+=1;
        cscore.innerText=`COMPUTER SCORE:-${compScore}`;
    }else{
        winner.innerText="You win!!!";
        playerScore+=1;
        pscore.innerText=` PLAYER SCORE :- ${playerScore}`;
        }
    }
    if(youChoose==='Scissor'){
        if(compChoose==='Rock'){
        winner.innerText="You lose!!!";
        compScore+=1;
        cscore.innerText=`COMPUTER SCORE:-${compScore}`;
    }else{
        winner.innerText="You win!!!";
        playerScore+=1;
        pscore.innerText=` PLAYER SCORE :- ${playerScore}`;
        }
    }
  }

if(playerScore===5){
    result.innerText="!!!WINNER!!!";
    playerScore=0;
    compScore=0;
    pscore.innerText=` PLAYER SCORE :- ${playerScore}`;
    cscore.innerText=`COMPUTER SCORE:-${compScore}`;
    setInterval(()=>{result.innerHTML=""},3000)
}else if(compScore===5){
    result.innerText="!!!LOSER!!!";
    playerScore=0;
    compScore=0;
    pscore.innerText=` PLAYER SCORE :- ${playerScore}`;
    cscore.innerText=`COMPUTER SCORE:-${compScore}`;
    setInterval(()=>{
        you.innerText="";
        game.innerText="";
       winner.innerText="";
        result.innerHTML="";
    },3000)
}

}
