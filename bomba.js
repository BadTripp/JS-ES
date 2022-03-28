let timer=0;
let i=1;
let id=0;
function esplosione (){
    timer=document.getElementById("timer").value
    id=setInterval(conto,1000,[document.getElementById("timer").value]);
    
}
function conto(t){  
    i++
    if(i >= t) {clearInterval(id);
        document.getElementById("imgBomba").src = "./immagini/esplosione.jpg";
         };
    
}