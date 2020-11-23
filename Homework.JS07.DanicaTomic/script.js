/*function addRow () {
  let input1 = prompt ("enter number of rows:");
}

function addCell () {
  let input2 = prompt ("enter number of cells:");
}

function mainTable () {
  tbl = document.getElementById("tabela");

}
addRow();
addCell();
mainTable();*/
// Write a Javascript function that will dynamiclly create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is (ex. Row-3 Column-1)
let inputRow = prompt ("enter rows:");
let inputCell = prompt ("enter cells:");
function myFunction() {
  let table = document.getElementById("tabela");
  let row = table.insertRow(0);
  for (let i = 0; i <inputRow.length; i++){
  row.innerHTML += `<tr>Row ${inputRow} </tr>`;
 }
  let cell = row.insertCell(0);
  for (let i = 0; i <inputCell.length; i++){
  cell.innerHTML += `<td>Column ${inputCell}</td>`;
 }
}

myFunction();
