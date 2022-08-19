const calculadora = require('./mate');

const prompt = require("prompt-sync")({ sigint: true});

do{
var sele = prompt('Que operacion deseas hacer (dame el numero): 1.- Suma 2.- Resta 3.- multiplicacion 4.- division 5.- modulo: ');

if (sele == 1){
    var n1 = parseFloat(prompt('Dame el primer numero: '));
    var n2 = parseFloat(prompt('Dame el segundo numero: '));
    var sum = calculadora.suma(n1,n2);
    console.log(sum);
} else if (sele == 2) {
    var n1 = parseFloat(prompt('Dame el primer numero: '));
    var n2 = parseFloat(prompt('Dame el segundo numero: '));
    var re = calculadora.resta(n1,n2);
    console.log(re);
} else if (sele == 3){
    var n1 = parseFloat(prompt('Dame el primer numero: '));
    var n2 = parseFloat(prompt('Dame el segundo numero: '));
    var mult = calculadora.multi(n1,n2);
    console.log(mult);
} else if (sele == 4){
    var n1 = parseFloat(prompt('Dame el primer numero: '));
    var n2 = parseFloat(prompt('Dame el segundo numero: '));
    var divi = calculadora.division(n1,n2);
    console.log(divi);
} else if(sele == 5){
    var n1 = parseFloat(prompt('Dame el primer numero: '));
    var n2 = parseFloat(prompt('Dame el segundo numero: '));
    var modu = calculadora.modu(n1,n2);
    console.log(modu);
} else{
    var mensaje = calculadora.mensaje();
    console.log(mensaje);
}

}while(sele > 1 && sele < 6);

