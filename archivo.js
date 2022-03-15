let nombre = prompt("Escribe la cantidad que tienes: ");
// let equis= 13;
// let variables = "practicando ando";
// var apellido = "gonzales";
// let edad = 12;
dineroTotal = parseInt(nombre);
if (dineroTotal< 10){
    alert("Puedes comprarte helado de conito");
    alert("Te sobrara: " + (dineroTotal -10));
}else if(dineroTotal >10 && dineroTotal < 15){
    alert("Puedes comprar una crepita de diferentes sabores");
    alert("Te sobrara: "+ (dineroTotal -15));
}else{
    alert("Comprate otra cosa millonario");
}