var texto = document.getElementById("texto_lineas");
var texto = document.getElementById("boton");
boton.addEventListener("click, dibujoporclick");

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");



function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal) {
   
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveto (xinicial,yinicial);
    lienzo.leneto(xfinal,yfinal);
    lienzo.stroke;
    lienzo.closePath();
}

function dibujoporclick(){

    
    var lineas= parseInt(Text.value);
var l= 0;
var yi, xf;
var colorcito = "#FAA";
var espacio =ancho / lineas;

while(1 < lineas) {

    yi =  espacio* 1;
    xf = espacio * (1 + 1);
    dibujarlinea("colorcito", 0,0, 10, 300);
    console.log("linea" + 1);
    1++;
}

dibujarlinea("colorcito", 1, 1, 1, 300);
dibujarlinea("colorcito", 1, 299, 299, 299);

}