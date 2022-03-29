let numero=4.2;
let score=0;
let match=0;
let mostraNumero = function (){
    
    numeroUtente=document.getElementById("input").value;
    if(numeroUtente > 0 )
    {
    numeroRandom=Math.floor(Math.random() * 6) + 1;
    match++;
    mostraDado(numeroRandom);
    check(numeroUtente,numeroRandom);
    document.getElementById("score").innerText="Score"+score+"\n"+"Giocate:"+match;
    //document.getElementById("risultato").innerText= Math.round(numero);
    // document.getElementById("risultato").innerText= Math.ceil(numero);
    // document.getElementById("risultato").innerText= Math.floor(numero);
    // document.getElementById("risultato").innerText= numero.tofixed(2);
}else {document.getElementById("risultato").innerText="Inserisci un numero maggiore di 0"}
    numeroUtente=document.getElementById("input").value="";
}
function mostraDado(numero){

    document.getElementById("imgDado").src="./immagini/dado"+numero+".png";
}
function check(numeroUtente,numeroRandom){
    if(numeroUtente == numeroRandom){
        score++;
        document.getElementById("risultato").style.color = "green";
        document.getElementById("risultato").innerText="Hai indovinato!- Numero uscito:"+numeroRandom;
    }else{ document.getElementById("risultato").style.color = "red"; document.getElementById("risultato").innerText="Non hai indovinato  indovinato!- Numero uscito:"+numeroRandom;}
}