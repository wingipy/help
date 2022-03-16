// class humano{
//     constructor(nombre,edad,dni){
//         this.namee = nombre;
//         this.age = edad;
//         this.num = dni;
//         this.ver = `Esta persona se llama ${this.namee} tiene ${this.age} y esta identificado 
//         con el DNI ${this.num}`
//     }

//     verInfo(){
//         document.write(this.ver + "<br>");
//     }
// }

// const Humano1 = new humano("Claudia",20,72486626);

// Humano1.verInfo();

// class animal{
//     constructor(especie,edad,color){
//         this.esp= especie;
//         this.agee= edad;
//         this.coloor = color;
//         this.verInfo = `Este animal es de la especie ${this.esp}, tiene ${this.agee} de edad y
//         tiene el color ${this.coloor}`
//     }

//     verinfor(){
//         document.write(this.verInfo + "<br>");
//     }
// }

// const animal1 = new animal("reptil", 3, "verde");

// animal1.verinfor();


// class Empleado{
//     constructor ( id, nombre, apellido, codigo, edad){
//         this.ide = id;
//         this.noom = nombre;
//         this.ape = apellido;
//         this.codigo = codigo;
//         this.aagee=edad;
//         this.vertodo= `El id de esta persona es: ${this.ide}, sus datos son ${this.noom} ${this.ape} ${this.codigo} y tiene
//         ${this.aagee} de edad.`
//     }

//     VerDatos(){
//         document.write(this.vertodo + "<br>");
//     }
// }

// const Empleado1 = new Empleado(01,"Carlos","Martinez",0987654,34);

// Empleado1.VerDatos();

class Movilidad{
    constructor(tipo, color, año){ //abstraccion
        this.tipp = tipo;
        this.coler = color;  //los datos se encapsulan
        this.años = año;

    }
}

class Auto extends Movilidad {
    constructor(marca, color, año, estado){ //  Herencia 
        super(color, año)
        this.marc = marca;
        this.estad = estado;
    }


    Arrancar(){
        if (this.estad == true){
            document.write("El auto esta encendido" + "<br>");
        }else{
            document.write("El auto esta apagado");
        }
    }
}

const auto1 = new Auto("Mercedes", "rojo", 2017, true);
const auto2 = new Auto("Mercedes","blanco", 2016, true);

auto1.Arrancar();
auto2.Arrancar();