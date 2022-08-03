

// OBJETOS LITERALES

let usuario_uno = {
// PROPIEDAD
    nombre: "matias",
    apellido: "gaddi",
    edad: 37,

 // METODO
    hablar: function(){
        console.log("matias esta hablando")
    }
}

console.log("el nombre es", usuario_uno.nombre);
console.log("el apellido es", usuario_uno.apellido);


usuario_uno.hablar();


// FUNCION CONSTRUCTORA

function usuario( nombre , apellido , edad){

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

};

let usuario_nuevo = new usuario( "pablo" , "gaddi" , 37);
let usuario_viejo = new usuario( "cristian" , "gonzalez" , 37);


console.log(usuario_nuevo.nombre);
console.log(usuario_viejo.nombre);

// CLASES siempre la primera letra empieza con mayuscula

class Alumno_veronica{

    constructor( nombre , apellido , edad){

        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.nota_uno;
        this.nota_dos;
    }
    saludar(){
        console.log("hola mi nombre es", this.nombre);
    }
    get_datos(){
        console.log("<------datos alumnos------>");
        console.log(this.nombre);
        console.log(this.apellido);
        console.log(this.edad);
    }
    get_nota_uno(nota){
         this.nota_uno = nota;
    }
    get_nota_dos(nota){
        this.nota_dos = nota;
    }
    get_notas(){
        console.log("nota uno", this.nota_uno);
        console.log("nota dos", this.nota_dos);
    }

}

let Alumno_uno = new Alumno_veronica( "cristiann" , "rios" , 41);
let Alumno_dos = new Alumno_veronica("silvina" , "nuñez" , 42);

console.log("hola soy", Alumno_uno.nombre);

Alumno_uno.saludar();
Alumno_dos.saludar();

Alumno_uno.get_datos();
Alumno_dos.get_datos();

Alumno_uno.get_nota_uno(8);
Alumno_uno.get_nota_dos(7);

Alumno_uno.get_notas();

Alumno_uno.get_datos();
Alumno_dos.get_datos();