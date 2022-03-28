var i=0;
function cambiaImmagine(){
    if(i >= 2){i=0;}else {i++;}
    var colori=["verde","giallo","rosso"];
    var coloriLen=colori.length;
    console.log(i);
    i
    document.getElementById("semaforo").src = "./immagini/"+colori[i]+".png";
    
}