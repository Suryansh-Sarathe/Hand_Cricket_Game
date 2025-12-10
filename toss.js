const box= document.querySelector('.tossbg');
const header=document.querySelector('.toss-heading');
const coin=document.querySelector('#coin');
const heads=document.querySelector('#heads');
const tails=document.querySelector('#tails');
const tossInformation = document.getElementById('tossInfo');

heads.addEventListener('click',()=>{
    coinFlip('heads');
});

tails.addEventListener('click',()=>{
    coinFlip('tails');
});

async function coinFlip(userChoice){
    let randomNum=Math.floor(Math.random()*2);
    let result=randomNum===0?'heads':'tails';
    coin.style.animation='spin 1s linear infinite';
    await setTimeout( ()=>{
        coin.style.animation='none';
        if(userChoice===result){
            coin.innerHTML=`${result.toUpperCase()}`;
            header.style.fontSize='2rem';
            header.innerText="You won the toss! Choose to Bat or Bowl";
            heads.innerText="Bat";
            tails.innerText="Bowl";
            heads.removeEventListener('click',()=>{});
            tails.removeEventListener('click',()=>{});
            heads.addEventListener('click',()=>{
                box.style.display='none';
                tossInformation.innerText='true';
                
            });
            tails.addEventListener('click',()=>{
                box.style.display='none';
                tossInformation.innerText='false';
            });
        }
        else{
            coin.innerHTML=`${result.toUpperCase()}`;
            header.style.fontSize='2rem';
            const bat_ball=randomNum===0?'Bat':'Bowl';
            header.innerText=`You lost the toss! Computer chooses to ${bat_ball} first`;
            heads.style.display='none';
            tails.style.display='none';
            setTimeout(()=>{
                box.style.display='none';
                tossInformation.innerText=randomNum===0?'false':'true';
            },3000);
        }
            

    },1500)
    
    }
    