
console.log("Estoy conectado");

let numero1 = 0;
let numero2 = 0;

let suma = 0;

let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let resultado = document.getElementById("btnsumar")

let btnsumar = document.getElementById("btnsumar");
btnsumar.addEventListener("click", function(){

    error1.innerHTML="";
    error2.innerHTML="";
    numero1 = document.getElementById("numero1").value;
    console.log(numero1);


    if (numero1 === ""){
        error1.innerHTML = "Debe agregar el primer numero";
        error1.style.color = "red";
        return;
        
    }


    numero2 = document.getElementById("numero2").value;
    console.log(numero2);
    
    if (numero2 === ""){
        error2.innerHTML = "Debe agregar el segundo numero";
        error2.style.color= "red";
        return;
    }

    suma = parseInt(numero1) + parseInt(numero2);
    console.log(suma);


    resultado.innerHTML= suma;
    resultado.style.color="blue"
    resultado.style.fontSize = "1rem";
    resultado.style.fontFamily = "cursive";

});


