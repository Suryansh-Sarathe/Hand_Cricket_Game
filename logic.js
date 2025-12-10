const tossInfo=document.getElementById("tossInfo");
const batFirst=tossInfo.innerText==='true'?true:false;
let score=0;
let choices=document.querySelectorAll(".choices");
let msg=document.querySelector(".comment")
let upscore=document.querySelector(".score");
let target=document.querySelector(".target");
let button=document.querySelector(".restart");
let replay=document.querySelector(".replay");
let balls=0;
let secondInnings=false;


button.addEventListener("click",()=>{
    score=0;
    balls=0;
    upscore.innerText=`Score:${score}`;
    choices.forEach((choice)=>{
        choice.addEventListener("click",handleClick)});
        button.innerText=batFirst?"Start Bowling":"Start Batting";
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
    celebrate(3000);
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
    celebrate(3000);
    return six[i];
}
function playGame(i){
    let ci=compchoice();
    balls++;

    if(ci==i){
        if(!secondInnings){
            secondInnings=true;
            msg.innerText= gotOut();
            msg.style.backgroundColor="red";
            choices.forEach((choice)=>{
                choice.removeEventListener("click",handleClick)});
            button.classList.remove("hide");
            button.innerText=batFirst?"Start Bowling":"Start Batting";
            target.innerText=`Target: ${score+1}`;
            target.classList.remove("hide");
        }
        else{
            if(!batFirst && score==(parseInt(target.innerText.split(" ")[1]))){
                msg.innerText="You Win! Congratulations!";
                celebrate(8000);
                msg.style.backgroundColor="green";
            }
            else{
                msg.innerText="You Lose! Better luck next time!";
                msg.style.backgroundColor="red";
            }
            choices.forEach((choice)=>{
                choice.removeEventListener("click",handleClick)});
            replay.classList.remove("hide");
        }
        
    }   
    else if(!secondInnings && !batFirst){
        if(ci==0){
            msg.innerText=single();
            msg.style.backgroundColor="#240750"
            score++;
        }
        else if(ci==1){
            msg.innerText=double();
            msg.style.backgroundColor="#240750";
            score=score+2;
        }
        else if(ci==2){
            msg.innerText=triple();
            msg.style.backgroundColor="#240750";
            score+=3;
        }
        else if(ci==3){
            msg.innerText=four();
            msg.style.backgroundColor="green";
            score+=4;
        }
        else if(ci==4){
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

   if (secondInnings) {
    const targetScore = parseInt(target.innerText.split(" ")[1]);
    const hasWon = !batFirst && score > targetScore;
    const hasLost = batFirst && score > targetScore;

    if (hasWon || hasLost) {
        msg.innerText = hasWon 
            ? "You Win! Congratulations!" 
            : "You Lose! Better luck next time!";
        msg.style.backgroundColor = hasWon ? "green" : "red";
        (()=>{hasWon?celebrate(8000):null})();

        choices.forEach(choice => 
            choice.removeEventListener("click", handleClick)
        );
        replay.classList.remove("hide");
    }
}
    replay.addEventListener("click",()=>{
        location.reload();
    });

    if(!batFirst && score==(parseInt(target.innerText.split(" ")[1]))){
                msg.innerText="You Win! Congratulations!";
                celebrate(8000);
                msg.style.backgroundColor="green";
                choices.forEach((choice)=>{
                    choice.removeEventListener("click",handleClick)});
                replay.classList.remove("hide");
    }
    upscore.innerText=`Score:${score} (${balls})`;
    

}



function celebrate(duration = 3000) {
    // Create a full-screen canvas
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    // canvas.style.zIndex = 9999;
    canvas.style.backgroundColor = "transparent";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Generate confetti particles
    const particles = [];
    const colors = ["#ff0", "#0f0", "#00f", "#f0f", "#0ff", "#f00"];

    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4, // size
            d: Math.random() * duration, // density
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 10,
            tiltAngleIncrement: Math.random() * 0.07 + 0.05,
            tiltAngle: 0
        });
    }

    // Animate confetti
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            ctx.beginPath();
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
            ctx.stroke();
        });

        update();
    }

    function update() {
        particles.forEach(p => {
            p.tiltAngle += p.tiltAngleIncrement;
            p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
            p.x += Math.sin(p.d);
            p.tilt = Math.sin(p.tiltAngle) * 15;

            // Reset particle if it goes off screen
            if (p.y > canvas.height) {
                p.x = Math.random() * canvas.width;
                p.y = -20;
                p.tilt = Math.random() * 10 - 10;
            }
        });
    }

    let animation;
    function loop() {
        draw();
        animation = requestAnimationFrame(loop);
    }
    loop();

    // Stop after duration
    setTimeout(() => {
        cancelAnimationFrame(animation);
        document.body.removeChild(canvas);
    }, duration);
}


