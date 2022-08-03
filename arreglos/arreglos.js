

let nombres = ["jose", "marta" , "belen" , "cristian"];

console.log(nombres[1]);

let frutas = ["banana" , "pera" , "anana" , "uva"];

console.log(frutas[2] + frutas[3]);

//for( let i = 0 ; i < 4 ; i = i++);

//console.log(frutas[i]);

// METODO PUSH para agregar valor al arreglo al final

let cualquier_cosa = ["perro" , 20 , "ramiro" , 33 , "gris" , 23.7 , "naranja"];

cualquier_cosa.push("matias");
console.log(cualquier_cosa);

//METODO UNSHIFT para agregar valor al arreglo al principio

cualquier_cosa.unshift(40);
console.log(cualquier_cosa);

//METODO POP para quitar valor del arreglo al final

cualquier_cosa.pop();
console.log(cualquier_cosa);

//METODO SHIFT para quitar valor del arreglo al principio

cualquier_cosa.shift();
console.log(cualquier_cosa);

//METODO SPLICE borra primer valor indice, segundo valor cuantos borra, tercer valor, agrega otro.

cualquier_cosa.splice(2 , 3 , "lujan");
console.log(cualquier_cosa);

//METODO JOIN trasnforma el arreglo en un string mas un separador

let resultado_join = cualquier_cosa.join(" ");
console.log(resultado_join);

//METODO CONCAT concatenar dos arreglos

let lista_colores = ["rojo" , "verde" , "azul" , "amarillo"];

let lista_concat = cualquier_cosa.concat(lista_colores);

console.log(lista_concat);

//METODO SLICE para cortar un arreglo primer valor = desde , segundo valor = hasta.

let corte = cualquier_cosa.slice(1 ,3);
console.log(corte);

//METODO INDEXOF sirve para buscar un elemento dentro de un indice

console.log("el indice donde se encuetra es:",cualquier_cosa.indexOf("naranja"));

for(let colores of lista_colores){

    console.log("el color es el siguiente:", colores);
}

let informe = [];

informe.push(lista_colores);

console.log("los colores en el informe son:",informe);