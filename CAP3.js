// let numer=10; // fuera del for numer vale 10

// for(let numer= 20; numer <=55; numer++){
//     //dentro del for numer vale 20
//     if(numer == 30){
//         //break;
//         continue;
//     }
//     document.write(numer + '<br>');
// }

let casas=["puerta","ventana","techo","mesa"];
let edificios = ["ventanales","sotano", "dupleks", casas];

forLABEL: // es una secuencia LABEL
for( let indexCasa in casas){

    //creo variable indexCasa que llama los indices de casas (0,1,2,3)
    if(indexCasa == 2){
        //cuando llegue al indice 2 ejecuta el siguiente for 
        for( let edificio of edificios){
            //crea la variable edificio que llama a los valores (ventanales, sotano,dupleks, casas(es el array))
            if (edificio == "sotano"){
                //cuando la ejecución llegue a sotano se salta con la palabra continue al siguiente valor
                continue;

                // regresa a la condición inicial de index para culminar la ejecución
            }
            document.write(edificio + "<br>");
        }

        
    }else{
        document.write(casas[indexCasa]+"<br>");
    }
}


