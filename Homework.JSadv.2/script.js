console.log("connected");





let btn = document.getElementById("btn1");
$("#btn1").click(function() {
  $.ajax({
    url: "https://swapi.co/api/planets/?page=1",
    success: function(response) {
      console.log("Success!");

      let showTable = document.getElementById("resultTable");
      showTable.innerHTML += `<tr><td>${response.name}</td><td>${response.population}</td><td>${response.climate}</td><td>${response.gravity}</td></tr>`

    },
    error: function(error) {
      console.log(error);
    }
  })
})

function createTable() {
  let text = "";
  for (let i = 0; i < object.length; i++) {
    text += "<tr>";
    text += "<td>" + object[i].id + "</td>";
    text += "<td>" + object[i].id + "</td>";
    text += "<td>" + object[i].id + "</td>";
    text += '</tr>';
  }
  resultTable.innerHTML = text;
}