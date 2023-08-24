var timer = 3;
var score = 0;
var hitrun = 0;
function increseScore(){
    score +=10;
    document.querySelector("#scoreval").textContent =score;
}
function getnewhit(){
    hitrun =Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrun;
}
function makeBubble(){
    var cluter = "";
for(let i = 1 ; i <= 114 ; i ++){

    var rn =Math.floor(Math.random()*10)
    cluter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = cluter;
}
function runtimer(){
    var timeint = setInterval(function (){
        if(timer>0)
        {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML =`<h1>Game Over</h1>`;
        }
    },1000) 
    
}
document.querySelector("#pbtm").addEventListener("click",function(dets)  {
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrun){
        increseScore();
        makeBubble();
        getnewhit();
    }

})
getnewhit()
runtimer()
makeBubble()
increseScore()