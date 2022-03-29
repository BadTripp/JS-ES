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
    switch(direzione){
        case direzione = 0:
            id=setInterval(movimento,1);
            break;
        case direzione = 1:
            id1=setInterval(movimentoDown,1);
            break;
        case direzione = 2:
            id2=setInterval(movimentoLUP,1);
            break;
        case direzione = 3:
            id3=setInterval(movimentoRUP,1);
            break;

    }
   
}
function movimento(){
    console.log("id0");
    direzione=0;
    stept+=speed+nRandom();
    stepl+=speed+nRandom();
    document.getElementById("pallina").style.top= stept+"px";
    document.getElementById("pallina").style.left = stepl+"px";
    if(stepl > 450 || stepl >= 450){clearInterval(id); id1=setInterval(movimentoDown,1)}
}
function movimentoDown(){
    console.log("id1");
    direzione=1;
    stepl-=speed+nRandom();
    stept+=speed+nRandom();
    document.getElementById("pallina").style.top = stept+"px";
    document.getElementById("pallina").style.left = stepl+"px";
    if(stept >= 450 || stepl <= 0 ){clearInterval(id1),id2=setInterval(movimentoLUP,1)}
}
function movimentoLUP(){
    console.log("id2");
    direzione=2;
    stept-=speed+nRandom();
    stepl-=speed+nRandom();
    
    document.getElementById("pallina").style.top= stept+"px";
    document.getElementById("pallina").style.left = stepl+"px";
    if(stepl <= 0){clearInterval(id2); id3=setInterval(movimentoRUP,1)}
}
function movimentoRUP(){
    console.log("id3");
    direzione=3;
    stept-=speed+nRandom();
    stepl+=speed+nRandom();
    document.getElementById("pallina").style.top= stept+"px";
    document.getElementById("pallina").style.left = stepl+"px";
    if(stept <= 0 || stepl >= 450){clearInterval(id3); id=setInterval(movimento,1)}
}
function stop(){
    startB.disabled=false;
    clearInterval(id);
    clearInterval(id1);
    clearInterval(id2);
    clearInterval(id3);
}
function changeSpeed(controllo){
    (controllo == 0) ? speed+=1 : speed-=1; 
}
function nRandom (){
    variazione=Math.random()*4+1;
    return variazione;
}