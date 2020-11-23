// Homework part 1
let newTitle = document.getElementById('myTitle');
newTitle.innerText= "This was changed from js!";

let newPrgh1 = document.getElementsByClassName('paragraph')[0];
newPrgh1.innerText = "This too!";

let newPrgh2 = document.getElementsByClassName('paragraph second')[0];
newPrgh2.innerText = "...again";

let someDiv = document.getElementsByTagName("div");
someDiv[2].id = "newId";
let someDivId = document.getElementById("newId");
let firstCH = someDivId.firstElementChild;
firstCH.innerText = "Changed again from js...";
let lastCH = someDivId.lastElementChild;
lastCH.innerText = "...same here.";
