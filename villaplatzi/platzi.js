var vp = document.getElementById("villaplatzi");
var papel = vp.getcontext("2d");


var fondo ={
    url: "tile.webp",
    cargaOk:false
};

var vaca = {

    url: "vaca.png",
    cargaOk: false
};

var cantidad = aleatorio(1,50);

fondo.imagen= new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo)

vaca.imagen = new Image();
vaca.imagen.src = "vaca.url";
vaca.imagen.addEventListener("load", cargarVaca);

function cargarFondo(){

    fondo.cargaOk =true;
    dibujar();
}

function caragarVacas(){

    vaca.cargaOk = true;
    dibujar();
}

function dibujar(){

    if(fondo.cargaOk)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
}
function dibujar(){

    if(vaca.cargaOk)
    {

        console.log(cantidad);
        for(var v=0; v < cantidad; v++){

            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y =y * 60;
            papel.drawImage(vaca.imagen, x, y);
        }
        
    }
}



function aleatorio(min, maxi){

    var resultado;
    resultado = Math.floor( Math.random() * (maxi - min + 1 )) + min;
    return resultado;
}