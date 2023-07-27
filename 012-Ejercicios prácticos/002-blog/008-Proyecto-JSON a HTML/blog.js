 fetch("api.php")
    .then(response => response.json())
    .then(function(response){
        console.log(response);
        for(var i = 0;i<response.length;i++){
            console.log("Tienes un artículo que dice: ")
            console.log(response[i])
        }
    })