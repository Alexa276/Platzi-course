var teclas = {

    UP: 38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
};

console.log("teclas");

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento){

        switch(evento.keycode)

        {
            case teclas.UP:
                console.log("arriba");
            break;
            case teclas.DOWN:
                console.log("abajo");
            break;
            case teclas.LEFT:
                console.log("izquierda");
            break;
            case teclas.RIGHT:
                console.log("derecha");
            default:
                console.log("otra tecla");
            break;
        }
    

    }