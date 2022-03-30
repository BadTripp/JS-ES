function rileva(){
    
    if(navigator.geolocation){
         navigator.geolocation.getCurrentPosition(scriviposizione);
    }else{
        document.getElementById("risultato").innerText="Geolocalizzazione non disponibile";
    }
}
let scriviposizione = function (posizione) {
    let messaggio= "Latitudine"+posizione.coords.latitude+ "<br>Longitudine"+ posizione.coords.longitude;
    document.getElementById("risultato").innerHTML=messaggio;
}