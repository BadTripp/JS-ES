pallina=document.getElementById("pallina");
tela=document.getElementById("tela");
stopB=document.getElementById("buttonStop");
step=0;
id=0;
direzione=0; // 0 sopra
function avvio(){
    if(direzione == 0)
    {id=setInterval(movimento,1);}
    else{
        id1=setInterval(movimentoDown,1);
    }
}
function movimento(){
    direzione=0;
    step+=1;
    document.getElementById("pallina").style.top = step+"px";
    document.getElementById("pallina").style.left = step+"px";
    if(step > tela.offsetHeight-pallina.offsetWidth){clearInterval(id); id1=setInterval(movimentoDown,1)}
}
function movimentoDown(){
    direzione=1;
    step-=1;
    console.log(step)
    document.getElementById("pallina").style.top = step+"px";
    document.getElementById("pallina").style.left = step+"px";
    if(step <= 0){clearInterval(id1),id=setInterval(movimento,1)}
}
function stop(){
    clearInterval(id);
    clearInterval(id1);
}