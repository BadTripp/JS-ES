







function calcola(){
    var base=document.getElementById("txbase").value;
    var altezza=document.getElementById("txaltezza").value;
    var select=document.getElementById("selezioneArea").value;
    if(select=="Quadrato"){var area=base*altezza;}else{var area=(base*altezza)/2;}
    document.getElementById("risultato").innerHTML = "Area:"+area;
    console.log("calcola");
}
