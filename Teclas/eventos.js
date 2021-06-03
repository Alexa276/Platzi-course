var teclas = {

    UP: 38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
};

console.log("teclas");

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getcontext("2d");
var x = 100;
var y = 100;

dibujarlinea("red",x-1,y-1,x+1, y+1,papel);


function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
   
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.linewidht = 3;
    lienzo.moveto (xinicial,yinicial);
    lienzo.leneto(xfinal,yfinal);
    lienzo.stroke;
    lienzo.closePath();
}


function dibujarTeclado(evento){

        
          var colorcito ="green";
          var movimiento = 1;
          switch(evento.keycode)

        {
            case teclas.UP:
                dibujarlinea(colorcito, x, y , x , y - movimiento, papel);
                y = y - movimiento;
            break;
            case teclas.DOWN:
                dibujarlinea(colorcito, x, y , x , y + movimiento, papel);
                y = y + movimiento;
            break;
            case teclas.LEFT:
                dibujarlinea(colorcito, x, y , x - movimiento, y ,papel);
                x = x - movimiento;
            break;
            case teclas.RIGHT:
                dibujarlinea(colorcito, x, y , x + movimiento, y ,papel);
                x = x + movimiento;

            break;
        }

    }