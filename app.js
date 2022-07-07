let firstName = document.querySelector("#inputName").value;
let lastName = document.querySelector("#inputLastName").value;
let userNumber = document.querySelector("#inputNumber").value;
let userAddress = document.querySelector("#inputAddress").value;
let nextofKin = document.querySelector("#inputNextOfKin").value;
let nexofkinNumber = document.querySelector("#inputNextOfKinNumber").value;
let gender = document.querySelector("#inputState").value;
console.log(firstName)
console.log(lastName)
console.log(userNumber)
console.log(userAddress)
console.log(nextofKin)
console.log(nexofkinNumber)
console.log(gender)

let fname = localStorage.setItem("firstName", firstName)
let lname = localStorage.setItem("lastName", lastName)
let userNum = localStorage.setItem("userNumber", userNumber)
let UserAdd = localStorage.setItem("userAddress", userAddress)
let nexKin = localStorage.setItem("nextofKin", nextofKin)
let nexKinNum = localStorage.setItem("nexofkinNumber", nexofkinNumber)
let gend = localStorage.setItem("gender", gender)