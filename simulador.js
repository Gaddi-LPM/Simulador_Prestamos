

function carga_datos(){

    let banco = document.getElementById("banco").value.toUpperCase();
    let monto = document.getElementById("monto").value;
    let plazo = document.getElementById("plazo").value;
    let contenedor = document.getElementById("container");

    let information = {"Entidad": banco , "Cantidad": monto , "Cuotas": plazo };

    Consulta_info.push(information);

    let information_JSON = JSON.stringify(Consulta_info);
    
    localStorage.setItem("Consultados", information_JSON);


    let resul = monto / plazo;
    let interes;

    if(plazo == 12){

        interes = monto * 0.30 / plazo;

    }
    else if(plazo == 24){

        interes = monto * 0.40 / plazo;
    }
    else if(plazo == 48){

        interes = monto * 0.50 / plazo;
    }
    else if(plazo == 72){

        interes = monto * 0.55 / plazo;
    }
    else{

        let contenedor = document.getElementById("container");
        contenedor.innerHTML = `<p> <strong> Debe ingresar los valores en los Campos </strong> </p>`; 
        contenedor.append(contenedor);   
        
    }
    let cuota_total = resul + interes;
    let contenedor_uno = document.getElementById("container");
    contenedor_uno.innerHTML = `<p> Operacion Realizada por el Banco <strong> ${banco} </strong> </p>
                             <p> El Monto solicitado es de <strong> ${monto} </strong> </p>
                             <p> El Plazo es de cuotas <strong> ${plazo} </strong> </p>
                             <p> El Interes de la cuota solicitada es <strong> ${interes.toFixed(2)} </strong> </p>
                             <p> El (CFT) a pagar mensualmente es <strong> ${cuota_total.toFixed(2)} </strong> </p>`;                          
     contenedor.append(contenedor_uno)
}

let Consulta_info = [];

let Consultadorr = document.getElementById("Consultador");
Consultadorr.addEventListener("click", function(){

    let contenedor_dos = document.getElementById("container_dos");
    let consul = localStorage.getItem("Consultados");
    let consultados = JSON.parse(consul);
 
    for( let info of consultados){

        console.log(info);
        contenedor_dos.innerHTML = `<p> Banco ${info.Entidad} </p>
                                    <p> Monto ${info.Cantidad} </p>
                                    <p> Cuotas ${info.Cuotas} </p>`;
                                    contenedor_dos.style.border = " 1px solid gold";                                                      
    }  
})

let btn = document.getElementById("boton");
btn.addEventListener("click", carga_datos);

let borrar = document.getElementById("borrar");
borrar.addEventListener("click", function (){

    document.getElementById("banco").value = "";
    document.getElementById("monto").value = "";
    document.getElementById("plazo").value = "";

});

let finalizado = document.getElementById("confirmar");
let contenedor_dos = document.getElementById("container_dos");
let Consultador = document.getElementById("Consultador");
finalizado.addEventListener("click", function(){

    let mensaje_final = document.createElement("h2");
    mensaje_final.innerHTML = "<h2> ¡SU OPERACION A RESULTADO EXITOSA! </h2>";
    mensaje_final.style.color = "rgb(39, 39, 187)";

    confir__exitosa.append(mensaje_final);

    container.style.display = "block";
    container__simulador.style.display = "none";
    //contenedor_dos.style.display = "none";
    Consultador.hidden = false;
})









































/*

function cotizador ( monto , plazo){

    
    valor_cuotas = monto / plazo;
    let interes;

    if(plazo == 12){

        interes = monto * 0.30 / plazo;
    }
    else if(plazo == 24){

        interes = monto * 0.40 / plazo;
    }
    else if(plazo == 48){

        interes = monto * 0.50 / plazo;
    }
    else if(plazo == 72){

        interes = monto * 0.55 / plazo;
    }
    else{
        console.log("Plazo no Valido");
    }
    

     let validacion = prompt("Desea realizar la Operacion? SI/NO");

     let porcentaje = ["12 x 30" , "24 x 40" , "48 x 50" , "72 x 55"];

     for(calculo of porcentaje){

        console.log("Plazo con porcentaje de Interes ", calculo, "%");
     }

     if(validacion == "SI" || validacion == "si"){
        let nombre_apellido = prompt("Ingrese su Nombre y Apellido");
        let DNI = prompt("Ingrese su numedo de documento");
        alert("Su Operacion se ha Realizo con Exito");

        let informacion = [nombre_apellido , DNI , monto , plazo , valor_cuotas , interes];

         console.log("--bienvenido a Nuestro Simulador--");
         console.log("Estimado/a Sr/a:", informacion[0]);
         console.log("Su numero", informacion[1], "No posee saldo Deudor");
         console.log("El Monto Solicitada es de", informacion[2]);
         console.log("La Cantidad de Cuotas a pagar son", informacion[3]);
         console.log("Su cuota pura es", informacion[4]);
         console.log("El interes es de", informacion[5]);
         console.log("Total con interes (CFT) es", informacion[4] + informacion[5]);

          // Estas son otras opciones de las cuales el usuario tambien puede elegir! 
         
          let datos_varios = [

           {monto: monto , plazo: 12 , interes: 0.30 + interes},
           {monto: monto , plazo: 24 , interes: 0.40 + interes},
           {monto: monto , plazo: 48 , interes: 0.50 + interes},
           {monto: monto , plazo: 72 , interes: 0.55 + interes}
         ]
    
          function sumar_interes ( valor ){
    
              let interes = valor.monto * valor.interes / valor.plazo;
              let calculo_total = valor.monto / valor.plazo + valor.interes;
              let informe_plazo = [valor.plazo +"  " + "cuotas de" +" "+  calculo_total];
        
              return informe_plazo
         }
    
          let resultado_interes = datos_varios.map(sumar_interes)
    
             console.log("<----------------Elija el Plazo que mas se adapte a su monto solicitado----------------->")

             for( let info of resultado_interes)

             console.log("tambien puede optar por las siguientes opciones:", info.join(" "));

     }

     else{
        alert("Muchas Gracias");
    }
   
}

//cotizador (monto = document.getElementById("monto"), plazo = document.getElementById("plazo"));

*/





