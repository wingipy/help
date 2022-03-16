
function Matematica(num1,num2){

        let operador = prompt("Ingrese operación: ");
    
        if (operador == "suma"){
            const resultado1= num1 + num2;
            document.write("La suma es: "+ resultado1);
    
        }else if(operador == "resta"){
            const resultado2= num1 - num2;
            document.write("La resta es: "+ resultado2);
    
        }else if(operador == "multiplicar"){
            const resultado3= num1 * num2;
            document.write("La multiplicación es: "+ resultado3);
    
        }else if(operador == "dividir"){
            const resultado4= num1 / num2;
            document.write("La division es: "+ resultado4);
    
        }else if(operador == "potencia"){
            const resultado5 = Math.pow(num1,num2);
            document.write("La potencia es: "+ resultado5);

        }else if (operador == "cuadrada"){
            const resultado6 = Math.pow(num1, num2);
            document.write("El numero elevao a la potencia 2 es : " + resultado6);

        }else if(operador == "cubica"){
            const resultado7 = Math.cbrt(num1);
            document.write("Numero elevado al cubo es: "+ resultado7);

        }else{
            document.write("No ingresaste nada");
        }
        
    }
    let num1 = prompt("Ingrese numero1: ");
    let num2 = prompt("Ingrese el numero2: ");
    Matematica(parseInt(num1),parseInt(num2));


