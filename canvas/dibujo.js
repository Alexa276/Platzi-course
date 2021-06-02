var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

dibujarlinea("white", 10,300,220,10);
dibujarlinea("yellow", 300,10,10,220);

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal) {
   
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveto (xinicial,yinicial);
    lienzo.leneto(xfinal,yfinal);
    lienzo.stroke;
    lienzo.closePath();
}