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
    
    Regresar.then(() => console.log("vamos mierda"))  .catch(() => console.log("Error de aquellos"));
    