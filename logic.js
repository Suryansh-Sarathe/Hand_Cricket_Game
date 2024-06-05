let score=0;
let high_score=0;
let choices=document.querySelectorAll(".choices");
let msg=document.querySelector(".comment")
let upscore=document.querySelector(".score");
let upHighScore=document.querySelector(".high-score");
let button=document.querySelector(".restart");
let balls=0;
let balls_H=0;


button.addEventListener("click",()=>{
    score=0;
    balls=0;
    upscore.innerText=`Score:${score}`;
    choices.forEach((choice)=>{
        choice.addEventListener("click",handleClick)});
        button.classList.add("hide");    
})

choices.forEach((choice)=>{
    choice.addEventListener("click",handleClick)});

function handleClick(){
    let iD= this.getAttribute("id");
     playGame(iD);
 }    

function compchoice(){
    return Math.floor(Math.random()*6);
}
function gotOut(){
    let out=["Caught! What an effort at mid-off!","Caught at first slip","In the air! and taken","Appeal for LBW! and given!","Run out! miscommunication between the batters","Bowled! beautiful inswinger","Hit-Wicket!","Stumped!"];
    let i=Math.floor(Math.random()*8);
    return out[i];
}
function single(){
    let single=["A quick single at mid-off!","Edge and dropped!! they steal a single","Straight to long-on","Its an easy single","Leg-byes!1 run","Wide ball!"];
    let i=Math.floor(Math.random()*5);
    return single[i];
}
function double(){
    let double=["a good fielding effort! saves 2 runs","Good running between the wickets!","Its an overthrow!They steal 2 runs","Run Out Appeal!","In the air! and dropped!","To third man, they ran 2!"];
    let i=Math.floor(Math.random()*6);
    return double[i];
}
function triple(){
    let triple=["Good effort on the ropes,they ran 3!","They were lightning fast!! ran 3 runs","In the air!! and dropped!"];
    let i=Math.floor(Math.random()*3);
    return triple[i];
}
function four(){
    let four=["Beautiful Cover-drive! and its a four","Straight over bowler's head! and four","He makes room for the square cut and four more","At long on and four!","Misfield, and it goes for four!","Edge and gone for four!","Inside edge! but it goes for four","He comes out of the crease and its one bounce over the ropes!","On to the pads and goes for four!","A flick at onside and four more!"];
    let i=Math.floor(Math.random()*10);
    return four[i];
}
function five(){
    let five=["5 wides! Poor bowling","Overthrow and four more runs!"];
    let i=Math.floor(Math.random()*2);
    return five[i];
}
function six(){
    let six=["Lofted Straight drive and six!!!","Muscled onto the onside and six runs!","In the air and clears the boundary!","Reverse Sweep and six!!!","Lofted Cover drive! goes all the way!","On the pads and six!","Short ball and pulled for six more runs!","Tries to surprise him with a bouncer and another six!!"];
    let i=Math.floor(Math.random()*8);
    return six[i];
}
function playGame(i){
    let ci=compchoice();
    balls++;

    if(ci==i){
        msg.innerText= gotOut();
        msg.style.backgroundColor="red";
        choices.forEach((choice)=>{
            choice.removeEventListener("click",handleClick)});
        button.classList.remove("hide");
        
    }    
    else{
        
        if(i==0){
            msg.innerText=single();
            msg.style.backgroundColor="#240750"
            score++;
        }
        else if(i==1){
            msg.innerText=double();
            msg.style.backgroundColor="#240750";
            score=score+2;
        }
        else if(i==2){
            msg.innerText=triple();
            msg.style.backgroundColor="#240750";
            score+=3;
        }
        else if(i==3){
            msg.innerText=four();
            msg.style.backgroundColor="green";
            score+=4;
        }
        else if(i==4){
            msg.innerText=five();
            msg.style.backgroundColor="#240750";
            score+=5;
        }
        else{
            msg.innerText=six();
            msg.style.backgroundColor="green";
            score+=6;
        }

    }
    if(score>=high_score){
        high_score=score;
        balls_H=balls;
        upHighScore.innerText=`High Score:${high_score} (${balls_H})`;
    }
    upscore.innerText=`Score:${score} (${balls})`;

}

