window.onload = function(){
    console.log("ok")
    document.getElementById("teclado").onclick = function(){
        console.log("hola")
    }
    document.onkeydown = function(e){
        console.log("has pulsado una tecla")
        var tecla = e.which
        console.log("codigo: "+tecla)
        var letratecla = String.fromCharCode(tecla)
        console.log("letra: "+letratecla)
        var mayuscula = letratecla.toUpperCase()
        console.log("letra: "+mayuscula)
        var elemento = document.getElementById(mayuscula)
        console.log(elemento)
        elemento.style.background = "green"
    }
    document.onkeyup = function(e){
        console.log("has pulsado una tecla")
        var tecla = e.which
        console.log("codigo: "+tecla)
        var letratecla = String.fromCharCode(tecla)
        console.log("letra: "+letratecla)
        var mayuscula = letratecla.toUpperCase()
        console.log("letra: "+mayuscula)
        var elemento = document.getElementById(mayuscula)
        console.log(elemento)
        elemento.style.background = "white"
    }
}
