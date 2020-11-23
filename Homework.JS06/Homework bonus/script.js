// Homework bonus
let input = prompt("Write a name of the recipe:");
let howManyIngr = prompt("How many ingredients we will need?");
let namesOfIngr = prompt("Write a name of every ingredient:");
//recipe(input, homManyIngr, namesOfIngr);
//print name of the recipe
// print all ingr as ul list
function printRecipe (input, element) {
  console.log(element);
  element.innerHTML = "";
  element.innerHTML += `<h1>${input}</h1>`;
}
function printNames(namesOfIngr, element1) {
  console.log(element1);
  element1.innerHTML = "";
  element1.innerHTML += `<ul>`;
  for (let i = 0; i <namesOfIngr.length; i++){
    element1.innerHTML += `<li>${namesOfIngr}</li>`;
  }
  element1.innerHTML += `</ul>`;
}
printRecipe();
printNames();
