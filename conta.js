let id=0;
let i = 0;
let conta = function (){
    
    id=setInterval(incrementa,100);
    function incrementa(){
        i++;
        document.getElementById("risultato").innerText = i+"ID:"+id;
        
    }
}  
let ferma = function (){
        if(id == 0){
            conta();
        }else{
            clearInterval(id);
            id=0;
        }
    
}

