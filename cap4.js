//creacion de funciones

//  function sumar(num1,num2){
//     let resultado=num1+num2;
//      document.write("La suma es: "+resultado+"<br>")
//  }
//  sumar(23,25);
//  sumar(13,8);

function Datos(nombre,apellido,edad,dni){

    let Dato = [nombre , apellido , edad , dni];

    document.write("Sus datos son: "+ Dato);
}
Datos("Claudia"," Guadalupe"," 20"," 72486626");
document.write("<br>")
Datos("Ronaldo"," Chavez"," 23"," 010896754");

function Edad(time){
    let limite= prompt("Ingresa tu edad: ");
    if (limite>=18){
        if (time > 2 && time<7){
            document.write("Eres mayor de edad, welcome");
        }else{
            document.write("Pagas noma papi, pero pasas");
        }
    }else{
        document.write("Eres menor de edad, no pasas");

    }
}
Edad(prompt("Ingresa hora:"));
document.write("<br>");

// function Matematica(num1,num2){

//     let operador = prompt("Ingrese operación: ");

//     if (operador == "suma"){
//         let resultado1= num1 + num2;
//         document.write("La suma es: "+ resultado1);

//     }else if(operador == "resta"){
//         let resultado2= num1 - num2;
//         document.write("La resta es: "+ resultado2);

//     }else if(operador == "multiplicar"){
//         let resultado3= num1 * num2;
//         document.write("La multiplicación es: "+ resultado3);

//     }else if(operador == "dividir"){

//         let resultado1= num1 / num2;
//         document.write("La division es: "+ resultado1);

//     }else{
//         document.write("No ingresaste nada");
//     }
// }
// let num1 = prompt("Ingrese numero1: ");
// let num2 = prompt("Ingrese el numero2: ");
// Matematica(parseInt(num1),parseInt(num2));

function Formulario(nombres,apellidoss,edade,dni,telefono){
    let muestra = [nombres, apellidoss,edade,dni,telefono];
    document.write("Para llenar el formulario usaremos: "+ muestra);
}

let namee= prompt("Ingrese nombre: ");
let ape= prompt("Ingrese apellido: ");
let ed = prompt("Ingrese edad: ");
let dn =prompt("Ingrese DNI: ");
let telef = prompt("Ingrese telefono: ");

Formulario(namee,ape,ed,dn,telef);
