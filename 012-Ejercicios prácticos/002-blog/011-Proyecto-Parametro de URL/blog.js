 fetch("api.php")
    .then(response => response.json())
    .then(function(response){
        console.log(response);
        for(var i = 0;i<response.length;i++){
            console.log("Tienes un artículo que dice: ")
            console.log(response[i])
            contenedor = document.querySelector("section")
            contenedor.innerHTML += ''+
                '<article>'+
                    '<img src="imagenes/'+response[i]['imagen']+'">'+
                    '<h3>'+response[i]['titulo']+'</h3>'+
                    '<time datetime="'+response[i]['fecha']+'">'+response[i]['fecha']+'</time>'+
                    '<p>'+response[i]['texto']+'</p>'+
                    '<div class="clearfix"></div>'+
                '</article>'+
            ''
        }
    })
window.onload = function(){
    const parametrosURL = new URLSearchParams(window.location.search);
    if(parametrosURL.get('admin') != undefined){
        console.log("eres admin")
        document.querySelector("#nuevaentrada").style.display = "block"
    }
}