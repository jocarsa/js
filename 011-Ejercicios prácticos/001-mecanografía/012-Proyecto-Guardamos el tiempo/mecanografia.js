window.onload = function(){
    var teclaspulsadas = []
    console.log("ok")
    document.getElementById("teclado").onclick = function(){
        console.log("hola")
    }
    document.onkeydown = function(e){
        var tecla = e.which
        var letratecla = String.fromCharCode(tecla)
        var mayuscula = letratecla.toUpperCase()
        var elemento = document.getElementById(mayuscula)
        elemento.classList.add("teclacorrecta")
        teclaspulsadas.push({"tecla":letratecla,"epoch":Date.now()})
        console.log(teclaspulsadas)
    }
    document.onkeyup = function(e){
        var tecla = e.which
        var letratecla = String.fromCharCode(tecla)
        var mayuscula = letratecla.toUpperCase()
        var elemento = document.getElementById(mayuscula)
        elemento.classList.remove("teclacorrecta")
    }
}
