class Telefono{
    constructor(color, peso, respan, rescam, memram){
        this.colore = color;
        this.pes= peso;
        this.resol=respan;
        this.resole=rescam;
        this.memoria=memram;
        this.encendido=false;

    }
    Encendido(){
        if(this.encendido == false){
            document.write("El telefono esta encencido"+ "<br>");
            this.encendido = true;
        }else{
            document.write("El telefono esta apagado");
        }
    }
    Reiniciar(){
        if(this.encendido == true){
            document.write("El telefono se esta reinciando" + "<br>");
        }else{
            document.write("El telefono está apagado");
        }
    }
    Fotografiar(){
        document.write(`El telefono tomo una foto en calidad ${this.resol} <br>`);
    }
    Grabar(){
        document.write(`El telefono graba en una resolución de ${this.resol} <br>`);
    }
    mostrar(){
        return`
        Color = ${this.colore}<br>
        Peso = ${this.pes}<br>
        Resolucion pantalla =${this.resol}<br>
        Resocluion camara =${this.resole}<br>
        RAM =${this.memoria}<br>
        `
    }
}

const telefono1 = new Telefono("Blanco", "140gr","5.2'","HD","4GB");
const telefono2 = new Telefono("Negro", "130gr","45'","HD","4GB");
const telefono3 = new Telefono("Rojo", "150gr","5.0'"," full HD","6GB");

document.write(telefono1.mostrar() + "<br>");
document.write(telefono2.mostrar()+"<br>");
document.write(telefono3.mostrar() + "<br>");

// telefono1.Encendido();
// telefono1.Fotografiar();
// telefono1.Grabar();
// telefono1.Reiniciar();
