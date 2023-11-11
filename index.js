
var box1,box2,inpu;
function temp(){
     inpu = document.getElementById("45").value
      
  var output_k = parseFloat(inpu)  + 273.15
  var output_f = (parseFloat(inpu)* (9/5)) + 32;  

   box1 = document.getElementById("46");
  box1.innerText = output_f + 'F';
  
   box2 = document.getElementById("47");
  box2.innerHTML = output_k + 'C'
}

function reset(){
    box1.innerHTML = null;
    box2.innerHTML = null;
    var inputElement = document.getElementById("45");
    inputElement.value = null;
}
