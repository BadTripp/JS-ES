pallina=document.getElementById("pallina");
tela=document.getElementById("tela");
step=0;
id=0;
function caduta(){
    id=setInterval(movimentoY,10);
}
function movimentoY(){
    step+=1;
    document.getElementById("pallina").style.top = step+"px";
    if(pallina.offsetTop > tela.offsetHeight-pallina.offsetWidth){clearInterval(id)}
}