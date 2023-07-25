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
        document.getElementById("textoescrito").innerHTML += letratecla
        // Sacamos pulsaciones por minuto:
        
        let tiempofinal = teclaspulsadas[teclaspulsadas.length-1]['epoch']
        //console.log("El tiempo final es de: "+tiempofinal)
        let tiempoinicio = teclaspulsadas[0]['epoch']
        //console.log("El tiempo inicio es de: "+tiempoinicio)
        let diferenciatiempo = (tiempofinal*1 - tiempoinicio*1)/1000
        //console.log("La diferencia es de: "+diferenciatiempo)
        let numeroteclaspulsadas = teclaspulsadas.length
        //console.log("El numero de teclas pulsadas: "+numeroteclaspulsadas)
        let pulsacionesporminuto = numeroteclaspulsadas/(diferenciatiempo/60)
        console.log(pulsacionesporminuto)
        document.getElementById("pulsacionesporminuto").innerHTML = pulsacionesporminuto
    }
    document.onkeyup = function(e){
        var tecla = e.which
        var letratecla = String.fromCharCode(tecla)
        var mayuscula = letratecla.toUpperCase()
        var elemento = document.getElementById(mayuscula)
        elemento.classList.remove("teclacorrecta")
    }
}
