pallina=document.getElementById("pallina");
tela=document.getElementById("tela");
stopB=document.getElementById("buttonStop");
startB=document.getElementById("button");
barra=document.getElementById("barra");
terreno=document.getElementById("terreno");
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
    (controlloCollisioni(terreno,pallina)) ? stop() : "";
    console.log("id0");
    direzione=0;
    speed=nRandom();
    stept+=speed;
    stepl+=speed;
    document.getElementById("pallina").style.top= stept+"px";
    document.getElementById("pallina").style.left = stepl+"px";
    if(stepl > 450 || stepl >= 450 || controlloCollisioni(barra,pallina) ){clearInterval(id); id1=setInterval(movimentoDown,1)}
}
function movimentoDown(){
    (controlloCollisioni(terreno,pallina)) ? stop() : "";
    console.log("id1");
    direzione=1;
    speed=nRandom();
    stepl-=speed;
    stept+=speed;
    document.getElementById("pallina").style.top = stept+"px";
    document.getElementById("pallina").style.left = stepl+"px";
    if(stept >= 450 || stepl <= 0 || controlloCollisioni(barra,pallina)){clearInterval(id1),id2=setInterval(movimentoLUP,1)}
}
function movimentoLUP(){
    (controlloCollisioni(terreno,pallina)) ? stop() : "";
    console.log("id2");
    direzione=2;
    speed=nRandom();
    stept-=speed;
    stepl-=speed;
    
    document.getElementById("pallina").style.top= stept+"px";
    document.getElementById("pallina").style.left = stepl+"px";
    if(stepl <= 0 || stept <= 0 || controlloCollisioni(barra,pallina)){clearInterval(id2); id3=setInterval(movimentoRUP,1)}
}
function movimentoRUP(){
    (controlloCollisioni(terreno,pallina)) ? stop() : "";
    console.log("id3");
    direzione=3;
    speed=nRandom();
    stept-=speed;
    stepl+=speed;
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
    variazione=Math.random()*6+0.1;
    return variazione;
}
let controlloCollisioni = function (div1, div2) {
    //let d1Offset = div1.offset();
    let d1offtop = div1.offsetTop;
    let d1offleft = div1.offsetLeft;
    let d1Height = div1.clientHeight;
    let d1Width = div1.clientWidth;
    let d1Top = div1.offsetTop + d1Height;
    let d1Left = div1.offsetLeft + d1Width;
  
    let d2offtop = div2.offsetTop;
    let d2offleft = div2.offsetLeft;
    let d2Height = div2.clientHeight;
    let d2Width = div2.clientWidth;
    let d2Top = div2.offsetTop + d2Height;
    let d2Left = div2.offsetLeft + d2Width;
  
    return !(
      d1Top < div2.offsetTop ||
      div1.offsetTop > d2Top ||
      d1Left < div2.offsetLeft ||
      div1.offsetLeft > d2Left
    );
}
function comandi(event){
    var tasto = event.key;

    switch(tasto){
        case event = "ArrowLeft":
            (barra.offsetLeft > 1) ? barra.style.left = barra.offsetLeft-4+"px" : "";
            break;
        case event = "ArrowRight":
            (barra.offsetLeft < 500-99) ? barra.style.left = barra.offsetLeft+4+"px": "";
            break;
    }
}