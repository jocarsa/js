 fetch("api.php")
    .then(response => response.json())
    .then(function(response){
        console.log(response)
    })