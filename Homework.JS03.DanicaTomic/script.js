console.log("script is connected")

////////////////////////////////Homework part 1
function someNum (x, y) {
  let result = x*y;
  console.log(result);
  return result;
}
someNum(2,3);

function someStr (){
  let str = "Homework";
  console.log(str);
  return str;
}
someStr();

let num1 = 1;
let num2 = 2;
function someBool () {
  if (num1 === num2) {
    console.log("False");
  } else {
    console.log("Correct");
  }
}
 someBool();

let someObject = {
   city : "Skopje",
   river: "Vardar"
 };

///////////////////////////////// Homework part 2
function calculation () {
let insertYear = prompt ("enter your dog years");
let input = parseInt(insertYear);
let result = insertYear * 7;
  console.log(result);
  return result;
}
calculation ();

////////////////////////////////// Homework part 3
let moneyYouHave = 88;
function ATM () {
  if ( moneyYouHave > 100) {
    console.log ("Not enough money");
  } else (moneyYouHave < 100)
    console.log ("You have 12 euros left");
}
ATM();
