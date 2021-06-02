var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveto (100,100);
lienzo.leneto(200,200);
lienzo.stroke;
lienzo.closePath();