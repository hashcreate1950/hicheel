const display = document.getElementById("displayarea");

let allnumber = document.getElementById("result");
let first = "";
let double = "";
let operator = "";

function result(Number) {
  allnumber.innerText = allnumber.innerText + Number;
  first = allnumber.innerText;
}
function nemeh() {
  allnumber.innerText = "";
  double = first;
  operator = "nemeh";
}
function hasah() {
  allnumber.innerText = "";
  double = first;
  operator = "hasah";
}
function tentsuu() {
  if (operator === "hasah") {
    allnumber.innerText = Number(double) - Number(allnumber.innerHTML);
  }
  if (operator === "nemeh") {
    allnumber.innerText = Number(double) + Number(allnumber.innerHTML);
  }
}

// remmeber to add functions
