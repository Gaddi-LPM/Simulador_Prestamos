
/*

// Retornar una funcion 

function doble(numero){

    return numero * 2
}


let resultado_doble = doble(20);
console.log("el resultado doble es", resultado_doble);

// Funcion de alto orden

function crear_multiplicador(multiplicador){

    return function(num){
        return num * multiplicador
    }

}

let doble_mun = crear_multiplicador(2);

console.log("el doble es", doble_mun(40));

let triple_mun = crear_multiplicador(3);

console.log("el triple es", triple_mun(40));

//Recibir funcion por parametro

function saludar_a_todos( array , saludar){

    for(let usuario of array){

        saludar(usuario)
    }
}

function saludar( nombre){

    console.log("hola yo soy", nombre);
}

let lista_usuarios = ["matias" , "marcos" , "daiana" , "jose" , "raul"];

saludar_a_todos( lista_usuarios , saludar);

*/

// Metodos ( funciones de alto orden el los ARRAY)

// FOR EACH



/*

let numero = [1,2,3,4,5,6,7,8,9];

numero.forEach(function(num){

    console.log("el numero iterado es", num);
})

// FIND retorna un solo valor
/*
let usuarios = [

    {nombre:"pepe", apellido:"lopez", edad: 32},
    {nombre:"laura", apellido:"torres", edad: 45},
    {nombre:"lujan", apellido:"blanco", edad: 33},
    {nombre:"miguel", apellido:"gomez", edad: 39},
]

function buscar_nombre( usuario ){

    return usuario.nombre == "pepe"
}

let resultado_find = usuarios.find(buscar_nombre);
console.log("el nombre encontrado es", resultado_find);

*/

// FILTER retorna mas de un valor como array
/*
let usuarios = [

    {nombre:"pepe", apellido:"lopez", edad: 12},
    {nombre:"laura", apellido:"torres", edad: 45},
    {nombre:"lujan", apellido:"blanco", edad: 33},
    {nombre:"miguel", apellido:"gomez", edad: 39},
]

//function mayor_de_edad ( usuario ){

//    return usuario.edad >= 18
//}

//let resultado_filter = usuarios.filter( mayor_de_edad );

//console.log("los mayores de edad son", resultado_filter);

//lo mismo con funcion anonima

let resultado_filter = usuarios.filter( function( usuario ){

    return usuario.edad >= 18
});

console.log("los mayores de edad son", resultado_filter);

//MAP modifica el array en un nuevo array sin alterar el original

function doble( ciclo ){

    return ciclo * 2
}

let numeross = [44 , 33 ,36 , 65 , 20 , 12];

let nuevos_numeross = numeross.map( doble );

console.log("los nuevos numeros son:", nuevos_numeross);


let productos = [

    {nombre: "cocina" , precio: 15000},
    {nombre: "silla" , precio: 3000},
    {nombre: "calefon" , precio: 17000},
    {nombre: "heladera" , precio: 32000},
]

function sumar_iva ( producto ){

    let iva = producto.precio * 0.21;

    return{

        nombre: producto.nombre,

        precio: producto.precio + iva
    }
}

let resultado_map = productos.map(sumar_iva);

console.log("los precios con iva son", resultado_map);

// REDUCE reduce el ARRAY a un solo valor total


let ventas = [

    {nombre: "cocina" , precio: 15000},
    {nombre: "silla" , precio: 3000},
    {nombre: "calefon" , precio: 17000},
    {nombre: "heladera" , precio: 32000},
]

function calcular_ventas ( acumulador , producto ){

    acumulador = acumulador + producto.precio;
    return acumulador
}

let ventas_total = ventas.reduce( calcular_ventas , 0);

console.log("eñ precio de las ventas totales son", ventas_total);

//SORT

let ciudades = ["Argentina" , "Madrid" , "Tokio" , "Praga" , "Los Angeles"];

console.log(ciudades.sort());

function ordenar( a , b){

    return a - b
}

let Numero_varios = [3 , 12 , 45 , 55 , 89 , 63];

let numeros_ordenados = Numero_varios.sort( ordenar );

console.log(numeros_ordenados);

// ... operador de desempaque


let nombre = "pedro";

let apellido = "gomez";

let saludo = `mi nombre es ${nombre }, y mi apellido es ${apellido}
y estoy buscando trabajo para ganarme la vida`;

//--------------------------------------

function sumar ( a , b ){

    let cuenta = a + b;
    return cuenta
}

let resultado = sumar( 100 , 20 ); // RESULTADO ES IGUAL AL RETORNO CUENTA 

console.log(resultado);



saludar = () => console.log("hola como estas soy matias");


saludar();

///---------------------------------DOMMMMM---------------------------

let Nombre = document.getElementById("Nombre").value;

let Apellido = document.getElementById("Apellido").value;

let Ambos = document.getElementById("ambos").value;

console.log(Nombre);
console.log(Apellido);
console.log(Ambos);


//let botonn = document.getElementsByClassName();

//let botonnn = document.getElementsByTagName();
*/


function sumar (puto , loco ,lola){

    let suma = puto + loco - lola;
    console.log("la suma es", suma);
}

sumar(12 , 23 , 3);


