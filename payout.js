let localm = JSON.stringify(localStorage.getItem("appData"))
console.log(localStorage)
let yourName = document.querySelector("#yourName")
let yourNum = document.querySelector("#yourNumb")
let genderr = document.querySelector("#genderr")
let addr = document.querySelector("#addr")
let keym = document.querySelector("#keym")
let randd = Math.trunc(Math.random() * 10000);

console.log(localStorage.firstName);

yourName.textContent = localStorage.firstName;
yourNum.textContent = localStorage.userNumber;
genderr.textContent = localStorage.gender;
addr.textContent = localStorage.userAddress;
keym.textContent = localStorage.firstName + randd;
console.log(randd);