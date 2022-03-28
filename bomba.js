let timer=0;
let i=0;
let id=0;
let end=0;
function esplosione (){
    timer=document.getElementById("timer").value
    if(timer >100 || timer < 0 || end != 0 ){document.getElementById("rovescia").innerText="Inserisci un valore maggiore di 1 e non superiore a 100";}
    else {id=setInterval(conto,1000,[timer]); end=1;}
    
    
}
function conto(t){ 
    end=1; 
    i++
    document.getElementById("rovescia").innerText=t-i;
    
    if(i == t) {
        clearInterval(id);
        document.getElementById("imgBomba").src = "./immagini/esplosione.jpg";
        end=0;
         };
    
}