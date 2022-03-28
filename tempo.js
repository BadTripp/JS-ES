

function orologio (){
    
    setInterval(update,100);
}
function update(){
    let oggi = new Date ();
     h = oggi.getHours();
     m = oggi.getMinutes();
     s = oggi.getSeconds();
     h=addZero(h);
     m=addZero(m);
     s=addZero(s);
     console.log(h[1]);
     document.getElementById("ora").innerText= h + ":" + m + ":" + s  ;
}
function addZero(x){
    if(x<10){
        x="0"+x;
    }
    return x
}
