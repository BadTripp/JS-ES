function calcola() {
  var base = document.getElementById("txbase").value;
  var altezza = document.getElementById("txaltezza").value;
  var select = document.getElementById("selezioneArea");
  var area;
  area =(select.value=="Rettangolo")?  area = base * altezza :  area = (base * altezza) / 2;
//   if (select == "Rettangolo") {
//     var area = base * altezza;
//   } else {
//     var area = (base * altezza) / 2;
//   }
  document.getElementById("risultato").innerHTML = "Area:"+select.textContent.length + area;
}
