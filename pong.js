pallina=document.getElementById("pallina");
tela=document.getElementById("tela");
stopB=document.getElementById("buttonStop");
startB=document.getElementById("button");
pallinaLeft=pallina.offsetLeft;
pallinaTop=pallina.offsetTop;
speed=1;

stept=0;
stepl=0;
id=0;
direzione=0; // 0 sopra


function avvio(){
    stepl=pallinaLeft;
    startB.disabled=true;
    if(direzione == 0)
    {id=setInterval(movimento,1);}
    else{
        id1=setInterval(movimentoDown,1);
    }
}
function movimento(){
    direzione=0;
    stept+=speed;
    stepl+=speed;
    console.log(pallinaLeft);
    document.getElementById("pallina").style.top= stept+"px";
    document.getElementById("pallina").style.left = stepl+"px";
    if(stepl > tela.offsetWidth-pallina.offsetWidth){clearInterval(id); id1=setInterval(movimentoDown,1)}
}
function movimentoDown(){
    direzione=1;
    stepl-=speed;
    stept+=speed;
    document.getElementById("pallina").style.top = stept+"px";
    document.getElementById("pallina").style.left = stepl+"px";
    if(stept > 450){clearInterval(id1),id3=setInterval(movimentoLUP,1)}
}
function movimentoLUP(){
    direzione=0;
    stept-=speed;
    stepl-=speed;
    
    document.getElementById("pallina").style.top= stept+"px";
    document.getElementById("pallina").style.left = stepl+"px";
    if(stepl == 0){ console.log("Ciao");clearInterval(id3); id4=setInterval(movimentoRUP,1)}
}
function movimentoRUP(){
    direzione=0;
    stept-=speed;
    stepl+=speed;
    
    console.log(pallinaLeft);
    document.getElementById("pallina").style.top= stept+"px";
    document.getElementById("pallina").style.left = stepl+"px";
    if(stept <= 0){clearInterval(id4); id=setInterval(movimento,1)}
}
function stop(){
    startB.disabled=false;
    clearInterval(id);
    clearInterval(id1);
}
function changeSpeed(controllo){
    (controllo == 0) ? speed+=1 : speed-=1; 
}