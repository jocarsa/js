window.onload = function(){
    var textoaescribir = "si quieres que una marca sea importante"
    var cursor = 0
    document.getElementById("textoaescribir").innerHTML = textoaescribir
    var contexto = document.getElementById("lienzo").getContext("2d")
    var contador = 0;
    var teclaspulsadas = []
    console.log("ok")
    document.getElementById("teclado").onclick = function(){
        console.log("hola")
    }
    document.onkeydown = function(e){
        var tecla = e.which
        if(tecla == 32){
            letratecla = " ";
        }else{
            letratecla = String.fromCharCode(tecla)
        }
        console.log("La letra tecla es: "+letratecla)
        console.log("La letra del texto es: "+textoaescribir[cursor])
        if(letratecla.toLowerCase() == textoaescribir[cursor]){
            console.log("ok")
            document.getElementById("textoescrito").innerHTML = updateText(textoaescribir,cursor+1)
            document.getElementById("textoescrito").style.background = "rgb(200,255,200)"
            console.log(updateText(textoaescribir,cursor+1))
            cursor++;
        }else{
            document.getElementById("textoescrito").style.background = "rgb(255,200,200)"
            console.log("ko")
        }
        
        
        var mayuscula = letratecla.toUpperCase()
        if(tecla == 32){
            var elemento = document.getElementById("espaciador")
            elemento.classList.add("teclacorrecta")
        }else{
            var elemento = document.getElementById(mayuscula)
            elemento.classList.add("teclacorrecta")
        }
        
        teclaspulsadas.push({"tecla":letratecla,"epoch":Date.now()})
        console.log(teclaspulsadas)
        //document.getElementById("textoescrito").innerHTML += letratecla
        // Sacamos pulsaciones por minuto:
        
        let tiempofinal = teclaspulsadas[teclaspulsadas.length-1]['epoch']
        //console.log("El tiempo final es de: "+tiempofinal)
        let tiempoinicio = teclaspulsadas[teclaspulsadas.length-11]['epoch']
        //console.log("El tiempo inicio es de: "+tiempoinicio)
        let diferenciatiempo = (tiempofinal*1 - tiempoinicio*1)/1000
        //console.log("La diferencia es de: "+diferenciatiempo)
        let numeroteclaspulsadas = teclaspulsadas.length
        //console.log("El numero de teclas pulsadas: "+numeroteclaspulsadas)
        let pulsacionesporminuto = 10/(diferenciatiempo/60)
        console.log(pulsacionesporminuto)
        document.getElementById("pulsacionesporminuto").innerHTML = pulsacionesporminuto
        contador++;
        contexto.fillStyle = getColor(pulsacionesporminuto)
        contexto.fillRect(contador,128,1,0-pulsacionesporminuto/5)
    }
    document.onkeyup = function(e){
        var tecla = e.which
        var letratecla = String.fromCharCode(tecla)
        var mayuscula = letratecla.toUpperCase()
        if(tecla == 32){
            var elemento = document.getElementById("espaciador")
            elemento.classList.remove("teclacorrecta")
        }else{
            var elemento = document.getElementById(mayuscula)
            elemento.classList.remove("teclacorrecta")
        }
    }
}
