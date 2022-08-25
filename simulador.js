
let monto = document.getElementById("monto");
let plazo = document.getElementById("plazo");
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
let form = document.getElementById("form");

form.addEventListener("click", (e)=> e.preventDefault() );

banco.addEventListener("keypress", (e) => {
    let key = e.key;
    let letras = "qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM";
    if(!letras.includes(key)) { e.preventDefault()}
})

monto.addEventListener("keypress", (e) =>{
    let keys = e.key;
    let valor = "1234567890";
    if(!valor.includes(keys)){ e.preventDefault()}
})
   
plazo.addEventListener("keypress", (e) =>{
    e.preventDefault()
    let keys = e.key;
    let valor = parseInt(keys);
    if(valor){ plazo.value += valor }
})

btn_nombre.addEventListener("keypress", (e) => {
    let key = e.key;
    let letras = "qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM";
    if(!letras.includes(key)) { e.preventDefault()}
})

btn_dni.addEventListener("keypress", (e) =>{
    let keys = e.key;
    let valor = "1234567890";
    if(!valor.includes(keys)){ e.preventDefault()}
})

btn.addEventListener("click", () => {

    let banco = document.getElementById("banco").value.toUpperCase();
    let monto = document.getElementById("monto").value;
    let plazo = document.getElementById("plazo").value;

    if(banco == null || banco == "" || banco.lenght == 0){
        CampoInvalido()
        document.getElementById("banco").style.boxShadow = "0 0 5px red";
        banco.contenedor.innerHTML = `<p> <strong>  Segun Campo </strong> </p>`;
    }

    else if(monto == null || monto < 10000 || monto == 0 || isNaN(monto)){
        CampoInvalido()
        document.getElementById("monto").style.boxShadow = "0 0 5px red";
        monto.contenedor.innerHTML = `<p> <strong>  Segun Campo </strong> </p>`;
    }

    else if(plazo == null || plazo == 0 || isNaN(plazo)){
        CampoInvalido()
        document.getElementById("plazo").style.boxShadow = "0 0 5px red";
    }
    else{
        CampoValido()
        document.getElementById("banco").style.boxShadow = "0 0 5px blue"
        document.getElementById("monto").style.boxShadow = "0 0 5px blue"
        document.getElementById("plazo").style.boxShadow = "0 0 5px blue"
    }
    
    let information = {"Entidad": banco , "Cantidad": monto , "Cuotas": plazo };
    Consulta_info.push(information);
    let information_JSON = JSON.stringify(Consulta_info);
    localStorage.setItem("Consultados", information_JSON);

    let resul = monto / plazo;
    let interes ;
    plazo == 24 ? interes = monto * 0.40 / plazo : contenedor.innerHTML = `<p> <strong>  Segun Campo </strong> </p>`; 
    plazo == 12 ? interes = monto * 0.30 / plazo : contenedor.innerHTML = `<p> <strong>  Segun Campo </strong> </p>`; 
    plazo == 48 ? interes = monto * 0.50 / plazo : contenedor.innerHTML = `<p> <strong>  Segun Campo </strong> </p>`; 
    plazo == 72 ? interes = monto * 0.55 / plazo : contenedor.innerHTML = `<p> <strong>  Segun Campo </strong> </p>`; 

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
     contenedor_dos.style.display = "none";
}); 

btn_nombre.addEventListener("blur", (e) => {
    e.target.value == "" ? contenedor_dos.style.display = "block": e.target.value;
})

btn_dni.addEventListener("focus", () => {
    contenedor_dos.style.display = "none";
}); 

btn_dni.addEventListener("blur", (e) => {
    e.target.value == "" ? contenedor_dos.style.display = "block": e.target.value;
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
      setTimeout( ()=> window.location.href = "index.html"  ,4000);  
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
    }).catch(() => console.log("Error"));

    function CampoInvalido (){
        Toastify({
            text: "Ingrese Datos Correctos",
            duration: 3000,
            style:{ background: "red" },
            }).showToast();    
    }

    function CampoValido (){
        Toastify({
            text: "Muy Bien!!!",
            duration: 3000,
            style:{ background: "blue" },
            }).showToast();    
    }

    





  




