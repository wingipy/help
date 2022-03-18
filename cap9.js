//creación de clases
//añade una clase
const titulo = document.querySelector(".titulo");
titulo.classList.add("Grande");

//remuev una clase con la palabra remove (reemplaza add)
//toogle agrega la clase si no la encuentra y la elimina si la tiene
//  CREAR ELEMENTOS

const titulo1 = document.querySelector(".titulo");
let caja= document.createElement("LI"); //siempre en mayusculas los nuevos objetos (etiquetas de html: input, p, h1)

let change = document.createTextNode("Este es un nodo creado");

//agrega al html
caja.appendChild(change);
//caja.innerHTML = change; //(no es objeto)

const contenedor = document.querySelector(".conteiner");

const parrafo_antiguo = document.createElement("P").innerHTML="Parrafo";
const parrafo_nuevo = document.querySelector(".parrafo");
parrafo_nuevo.innerHTML = "Parrafo2";

contenedor.replaceChild(parrafo_nuevo, parrafo_antiguo);

//mustra dentro del sitio
// titulo1.appendChild(caja);

//console.log(caja);

