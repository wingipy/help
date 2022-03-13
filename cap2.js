//para crear un array
let caja=['zapatos','sandalias','botas'];
document.write(caja[1]);

//ARRAY ASOCIATIVO
let persona={
    nombre: 'Claudia',
    apellido: 'Guadlaupe',
    edad: '19'
}

let nombre2 = persona.nombre //otra forma de mostrrar

let nombres = persona["nombre"];
let apellidos = persona["apellido"];
let edads = persona["edad"];

texto = `Su nombre es ${nombres} <br>
        su apellido es ${apellidos} <br>
        su edad es ${edads} <br>` 

document.write(texto);

 let num = 20;

 if (num < 30){
     num++;
     num++;
     num++;
     document.write("Se cumple solo si el num es menor al if:  "+ num);
 }else{
     document.write("No cumple");
 }

    //MUESTRA DE WHILE
while(num < 30){
    num++;
    document.write("Este sigue ejecutando <br>" + num)

    //MUESTRA DE DO WHILE
do{
     document.write(num);
     num++;
 }while(num < 25)