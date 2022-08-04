
let btn = document.getElementById("boton");
let borrar = document.getElementById("borrar");
let finalizado = document.getElementById("confirmar");
let Consultadorr = document.getElementById("Consultador");
let btn_solicitar = document.getElementById("btn_solicitar");

btn.addEventListener("click", carga_datos);
function carga_datos(){

    let banco = document.getElementById("banco").value.toUpperCase();
    let monto = document.getElementById("monto").value;
    let plazo = document.getElementById("plazo").value;
    let contenedor = document.getElementById("container");
    let btn_confirmar = document.getElementById("confirmar");

    let information = {"Entidad": banco , "Cantidad": monto , "Cuotas": plazo };
    Consulta_info.push(information);
    let information_JSON = JSON.stringify(Consulta_info);
    localStorage.setItem("Consultados", information_JSON);

    let resul = monto / plazo;
    let interes;

    plazo == 12 ? interes = monto * 0.30 / plazo : contenedor.innerHTML = `<p> <strong> Debe Ingresar los Valores Designados </strong> </p>`; 
    plazo == 24 ? interes = monto * 0.40 / plazo : contenedor.innerHTML = `<p> <strong> Debe Ingresar los Valores Designados </strong> </p>`; 
    plazo == 48 ? interes = monto * 0.50 / plazo : contenedor.innerHTML = `<p> <strong> Debe Ingresar los Valores Designados </strong> </p>`; 
    plazo == 72 ? interes = monto * 0.55 / plazo : contenedor.innerHTML = `<p> <strong> Debe Ingresar los Valores Designados </strong> </p>`; 

    let cuota_total = resul + interes;
    contenedor.hidden = false;
    contenedor.innerHTML = `<p> Operacion Realizada por el Banco <strong> ${banco} </strong> </p>
                             <p> El Monto solicitado es de <strong> ${monto} </strong> </p>
                             <p> El Plazo es de cuotas <strong> ${plazo} </strong> </p>
                             <p> El Interes de la cuota solicitada es <strong> ${interes.toFixed(2)} </strong> </p>
                             <p> El (CFT) a pagar mensualmente es <strong> ${cuota_total.toFixed(2)} </strong> </p>`;
                             btn_confirmar.hidden = false; 
                             btn_confirmar.style.display = "flex";                        
}

let Consulta_info = [];

Consultadorr.addEventListener("click", () => {
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

borrar.addEventListener("click", () => {
    document.getElementById("banco").value = "";
    document.getElementById("monto").value = "";
    document.getElementById("plazo").value = "";
    let contenedor = document.getElementById("container");
    let btn_confirmar = document.getElementById("confirmar");
    contenedor.hidden = true;
    btn_confirmar.style.display = "none"; 
});

finalizado.addEventListener("click", () => {
    let form_alta = document.getElementById("form_alta");
    let mensaje_final = document.createElement("h2");
    mensaje_final.innerHTML = "<h2> ¡SU CONSULTA A RESULTADO EXITOSA! </h2>";
    confir__exitosa.append(mensaje_final);
    mensaje_final.style.color = "rgb(39, 39, 187)";
    form_alta.style.display = "flex";
    container.style.display = "block";
    container__simulador.style.display = "none";
    finalizado.style.display = "none";
})

btn_solicitar.addEventListener("click", () => {
    Swal.fire({
        title: 'Gracias!',
        text: 'Su consulta ha sido Exitosa.',
        imageUrl: 'imagen/simulador.png',
        icon: 'success',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
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





