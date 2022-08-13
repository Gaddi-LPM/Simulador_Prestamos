
let contenedor = document.getElementById("container");
let contenedor_dos = document.getElementById("container_dos");
let btn_confirmar = document.getElementById("confirmar");
let btn = document.getElementById("boton");
let borrar = document.getElementById("borrar");
let finalizado = document.getElementById("confirmar");
let Consultadorr = document.getElementById("Consultador");
let btn_solicitar = document.getElementById("btn_solicitar");
let = dato_clima = document.getElementById("dato_clima");
let btn_nombre = document.getElementById("btn_nombre");
let btn_dni = document.getElementById("btn_dni")

btn.addEventListener("click", () => {

    let banco = document.getElementById("banco").value.toUpperCase();
    let monto = document.getElementById("monto").value;
    let plazo = document.getElementById("plazo").value;

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

});

let Consulta_info = [];

Consultadorr.addEventListener("click", () => {
    let consul = localStorage.getItem("Consultados");
    let consultados = JSON.parse(consul);
    for( let info of consultados){
        console.log(info);                                              
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
    let btn_nombre = document.getElementById("btn_nombre").value;
    let btn_dni = document.getElementById("btn_dni").value;
    let contenedor_dos = document.getElementById("container_dos");
    btn_nombre != "" && btn_dni != "" ? dar_alta() : contenedor_dos.innerHTML = `<p> Ingrese Datos Solicitados </p>`;
})

btn_nombre.addEventListener("focus", () => {
    contenedor_dos = document.getElementById("container_dos");
    contenedor_dos.style.display = "none";
}); 

btn_nombre.addEventListener("blur", () => {
    contenedor_dos = document.getElementById("container_dos");
    contenedor_dos.style.display = "block";
 })

 btn_dni.addEventListener("focus", () => {
    contenedor_dos = document.getElementById("container_dos");
    contenedor_dos.style.display = "none";
}); 

btn_dni.addEventListener("blur", () => {
    contenedor_dos = document.getElementById("container_dos");
    contenedor_dos.style.display = "block";
 })

let dar_alta = () =>{
    Swal.fire({
        title: 'Gracias!',
        text: 'Su consulta ha sido Exitosa.',
        imageUrl: 'imagen/simulador.png',
        icon: 'success',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        button: 'simulador.html'
      })

      setTimeout( ()=> window.location.href = "simulador.html"  ,4000);
     
}

fetch("https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&lang=sp&units=metric&appid=e1e3c5b80aea982acc9e895d320a90b6")

    .then(response => response.json())
    .then(data => {
        let icon_code = data.weather[0].icon;
        let url_icon = `http://openweathermap.org/img/wn/${icon_code}.png`;
    
        dato_clima.innerHTML = `<p> Temp ${data.main.temp} °C </p>
                                <p> Viento ${data.wind.speed} m/S </p> 
                                <p> Humedad ${data.main.humidity} % </p>
                                <p>  ${data.weather[0].description} </p>
                                <img src = ${url_icon}>
                                <p> <strong>${data.name} </strong> </p>`;
                                console.log(data);
                                
    })

/*
    let foto = [];

    function poner_foto(fotin){

        setTimeout(function(){

            foto.push("foto-de-Matias");
            fotin();
        },4000)
    }

    poner_foto(() => console.log(foto));  

    let carrito = [];

    let Regresar = new Promise((resolve, reject) => {

        let tiempo = Math.random();

        tiempo > 0.5 ? resolve(console.log("genial", tiempo)) : reject(console.log("mal ahi", tiempo));
        
    })
    
    Regresar.then(() => console.log("vamos mierda"))  .catch(() => console.log("la concha de la lora"));
    
  */  
                    
//  let mi_variable = prompt("ingrese un numero");
 
//  if (mi_variable ==12){

//     alert("guachin");
//  }
   
//  else{
//     console.log("no es doce", mi_variable);
//  }
  




