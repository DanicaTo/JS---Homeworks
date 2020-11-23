console.log("script is connected");

let year = prompt("Enter a birth year:");
let numberyear = parseInt(year);
let result = ((year-4)%12);
if (result === 0) {
  console.log("rat");
  alert("rat");
} else if (result === 1) {
  console.log("ox");
  alert("ox");
}else if (result === 2) {
  console.log("tiger");
  alert("tiger");
}else if (result === 3) {
  console.log("rabbit");
  alert("rabbit");
}else if (result === 4) {
  console.log("dragon");
  alert("dragon");
}else if (result === 5) {
  console.log("snake");
  alert("snake");
}else if (result === 6) {
  console.log("horse");
  alert("horse");
}else if (result === 7) {
  console.log("goat");
  alert("goat");
}else if (result === 8) {
  console.log("monkey");
  alert("monkey");
}else if (result === 9) {
  console.log("rooster");
  alert("rooster");
}else if (result === 10) {
  console.log("dog");
  alert("dog");
}else if (result === 11) {
  console.log("pig");
  alert("pig");
}
