var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas= 30;
var l= 0;
var yi, xf;
var colorcito = "#FAA";

while(1 < lineas) {

    yi = 10 * 1;
    xf = 10 * (1 + 1);
    dibujarlinea("colorcito", 0,0, 10, 300);
    console.log("linea" + 1);
    1++;
}

dibujarlinea("colorcito", 1, 1, 1, 300);
dibujarlinea("colorcito", 1, 299, 299, 299);


function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal) {
   
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveto (xinicial,yinicial);
    lienzo.leneto(xfinal,yfinal);
    lienzo.stroke;
    lienzo.closePath();
}