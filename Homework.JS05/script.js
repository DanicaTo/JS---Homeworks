console.log("script is connected");

//Homework

let arrayOfStrings = ['"', "Hello ", "there ", "students ", "of ", "SEDC", "!", '"'];
function example (array) {
  let i = 0;
  let result = "";
  while (i<array.length) {
    result = result + array[i];
    console.log(result);
    i++;

  }
}
example(arrayOfStrings);
