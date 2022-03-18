//EJERCICIOS CON COFLA
// const materias = {
//     programacion: [95, 8, 99, "programacion"],
//     matematica: [80, 7, 90, "matematica"],
//     logica: [97, 9, 95, "logica"],
//     comunicaciones: [90, 6, 90, "comunicaciones"],
// }

// const asistencia = () => {
//     for (materia in materias) {
//         let asistencia = materias[materia][0];
//         if (asistencia >= 90) {
//             console.log(materias[materia][3]);
//             console.log("%cAprobado", "color: blue");
//         } else {
//             console.log(materias[materia][3]);
//             console.log("%cDesaprobado", "color: red");
//         }

//     }
// }

// asistencia();

//Modificar las etiquetas desde js

//Este sirve para jugar con los textos de los html
// const titulo = document.querySelector(".titulo");
// titulo.setAttribute("contentEditable", "true");
//Sirve para agregarle al texto una etiqueta 
const titulo = document.querySelector(".titulo");
titulo.setAttribute("title","Practicando");
//con esto se modifican los estilos que tiene la clase titulo
titulo.style.padding="30px";
titulo.style.backgroundColor ="pink";

//se supone sirve para agregarle un capo obligatorio 
// const input = document.querySelector(".normal");
// input.required="required";
 // el minLength sirve para poner un minimo de caracteres para enviar
const input = document.querySelector(".normal");
input.minLength = 7;

// Sirve para especificar el elemento que se va a seleccionar

const nuevo = document.querySelector(".documento");
nuevo.accept ="image/jpg";


