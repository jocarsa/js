Los cambios realizados en el archivo JavaScript se centran en la captura de las teclas pulsadas por el usuario y la actualización del texto escrito en el elemento `#textoescrito`. Aquí está la explicación de los cambios:

1. Se ha agregado una variable `teclaspulsadas` que es un array vacío. Esta variable se utilizará para almacenar la información de las teclas pulsadas por el usuario.

```javascript
var teclaspulsadas = [];
```

2. Se ha agregado el código para mostrar el mensaje "ok" en la consola cuando la página se ha cargado con éxito.

```javascript
console.log("ok");
```

3. Se ha agregado un evento `onclick` al elemento `#teclado`, pero en esta versión, no se ha proporcionado una función que se ejecute al hacer clic en el teclado. En este caso, cuando se haga clic en el teclado, simplemente mostrará el mensaje "hola" en la consola.

```javascript
document.getElementById("teclado").onclick = function(){
    console.log("hola");
}
```

4. Se ha modificado el evento `onkeydown` para capturar las teclas que el usuario ha presionado. Cuando el usuario presiona una tecla, se obtiene el código ASCII de la tecla utilizando `e.which` y se convierte a la letra correspondiente con `String.fromCharCode(tecla)`. Luego, se convierte a mayúscula con `toUpperCase()` y se busca el elemento con el ID correspondiente en el teclado virtual y se le agrega la clase "teclacorrecta" para resaltar visualmente la tecla que el usuario ha presionado.

```javascript
document.onkeydown = function(e){
    var tecla = e.which;
    var letratecla = String.fromCharCode(tecla);
    var mayuscula = letratecla.toUpperCase();
    var elemento = document.getElementById(mayuscula);
    elemento.classList.add("teclacorrecta");

    // Se agrega la tecla pulsada y el tiempo actual (epoch) al array teclaspulsadas
    teclaspulsadas.push({"tecla":letratecla,"epoch":Date.now()});
    console.log(teclaspulsadas);

    // Se agrega la letra pulsada al elemento #textoescrito
    document.getElementById("textoescrito").innerHTML += letratecla;
}
```

5. Se ha modificado el evento `onkeyup` para eliminar la clase "teclacorrecta" del elemento del teclado virtual cuando el usuario suelta una tecla. Esto eliminará el resaltado visual de la tecla que se había aplicado cuando el usuario la presionó.

```javascript
document.onkeyup = function(e){
    var tecla = e.which;
    var letratecla = String.fromCharCode(tecla);
    var mayuscula = letratecla.toUpperCase();
    var elemento = document.getElementById(mayuscula);
    elemento.classList.remove("teclacorrecta");
}
```

Con estos cambios, el teclado virtual ahora mostrará visualmente las teclas que el usuario ha presionado, resaltándolas temporalmente en verde (gracias a la clase "teclacorrecta") y el texto escrito por el usuario se actualizará y se mostrará en el elemento `#textoescrito`. Además, la información de las teclas pulsadas junto con el tiempo (epoch) se almacenará en el array `teclaspulsadas`.