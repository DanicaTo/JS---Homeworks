let btn = document.getElementById("btn");
$("#btn").click(function(){
        $.ajax({
            url:"https://swapi.co/api/people/1/",
            success: function(response){
                console.log("Success!");
                 let showName = document.getElementById("resultName");
                 showName.innerHTML = `<h1>${response.name}</h1>`
                 let showTable = document.getElementById("resultTable");
                 showTable.innerHTML += `<tr><td>${response.height}</td><td>${response.mass}</td><td>${response.eye_color}</td><td>${response.hair_color}</td></tr>`
            },
            error: function(error){
                console.log(error);
            }
        })
    })
