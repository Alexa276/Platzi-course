class Pakiman {

    constructor(n,v,a) {
       
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;

        this.imagens.src = imagenes[this.nombre]
        
    }
    hablar() {

        alert("this.nombre")
    }

    mostrar() {

        document.write("<p>");
        document.body.appendChild(this.imagen);
        document.write("<strog>" + this.nombre+ "</strong>" <"br />");
        document.write("Vida" + this.vida + "<br />");
        document.write("Ataque" + this.ataque +"<hr />");
        document.write("</p>");
    }
    
}




