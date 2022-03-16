//EJERCICIOS CON COFLA
const materias = {
    programacion: [75,8,89,"programacion"],
    matematica: [80,7,70, "matematica"],
    logica: [87, 9, 65, "logica"],
    comunicaciones: [90, 6, 60, "comunicaciones"], 
}

const asistencia=()=>{
    for(materia in materias){
        let asistencia= materias[materia];
        if(asistencia <= 90){
            console.log(materias[materia][3]);
            console.log("%cAprobado","color: pink");
        }else{
            console.log(materias[materia][3]);
            console.log("%cDesaprobado", "color: red");
        }

    }
}
asistencia();




