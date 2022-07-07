let display = document.querySelector("#ourlisted")
const firstName = document.querySelector("#inputName").value
const lastName = document.querySelector("#inputLastName").value
const userNumber = document.querySelector("#inputNumber").value
let userAddress = document.querySelector("#inputAddress").value
let nextofKin = document.querySelector("#inputNextOfKin").value
let nexofkinNumber = document.querySelector("#inputNextOfKinNumber").value
let gender = document.querySelector("#inputState").value
let random = Math.floor(Math.random() * 1000);
console.log(display)

//STORING ON LOCAL STORAGE
let fname = localStorage.setItem("firstName", firstName)
let lname = localStorage.setItem("lastName", lastName)
let userNum = localStorage.setItem("userNumber", userNumber)
let UserAdd = localStorage.setItem("userAddress", userAddress)
let nexKin = localStorage.setItem("nextofKin", nextofKin)
let nexKinNum = localStorage.setItem("nexofkinNumber", nexofkinNumber)
let gend = localStorage.setItem("gender", gender);


//GETTING FROM LOCAL STORAGE
let fgname = localStorage.getItem("firstName", firstName)
let lgname = localStorage.getItem("lastName", lastName)
let ugserNum = localStorage.getItem("userNumber", userNumber)
let UgserAdd = localStorage.getItem("userAddress", userAddress)
let ngexKin = localStorage.getItem("nextofKin", nextofKin)
let ngexKinNum = localStorage.getItem("nexofkinNumber", nexofkinNumber)
let ggend = localStorage.getItem("gender", gender);

let gotten = [fgname,lgname,ugserNum,UgserAdd,ngexKin,ngexKinNum,ggend];

console.log(gotten[3])

function displayingTheStoredItems(theDetails) {
    let items = ""
    for(let i = 0; i <= theDetails.length; i++) {
        items += `<li>${theDetails[i]}</li>`;
    }
    return items;
}

console.log(displayingTheStoredItems(gotten))


// display.textContent = gotten;