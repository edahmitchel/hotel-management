const display = document.querySelector("#ourlisted");
const firstName = document.querySelector("#inputName").value;
const lastName = document.querySelector("#inputLastName").value;
const userNumber = document.querySelector("#inputNumber").value;
const userAddress = document.querySelector("#inputAddress").value;
const nextofKin = document.querySelector("#inputNextOfKin").value;
const nexofkinNumber = document.querySelector("#inputNextOfKinNumber").value;
const gender = document.querySelector("#inputState").value;
const random = Math.floor(Math.random() * 1000);
// console.log(display)

//STORING ON LOCAL STORAGE
// let fname = localStorage.setItem("firstName", firstName)
// let lname = localStorage.setItem("lastName", lastName)
// let userNum = localStorage.setItem("userNumber", userNumber)
// let UserAdd = localStorage.setItem("userAddress", userAddress)
// let nexKin = localStorage.setItem("nextofKin", nextofKin)
// let nexKinNum = localStorage.setItem("nexofkinNumber", nexofkinNumber)
// let gend = localStorage.setItem("gender", gender);

let sendData = JSON.stringify({fname: firstName,lname: lastName, userNum: userNumber, userAdd: userAddress, nextofKin: nextofKin, nexkinNum: nexofkinNumber, gend: gender })
localStorage.setItem("appData", sendData);
console.log(JSON.parse(localStorage.getItem("appData", sendData)))


// SENDING TO PAYOUTPAGE
let gottenInfo = document.querySelector("#gottenInfo");
let info = localStorage.getItem("appData");
gottenInfo = JSON.parse(info)
console.log(typeof(info))
console.log(typeof(gottenInfo))
document.querySelector("#gottenInfo").innerHTML = gottenInfo
// console.log(gottenInfo)
// yourName.textContent = `${firstName} ${lastName}`



console.log("Hello, World!")

// // GETTING FROM LOCAL STORAGE
// let fgname = localStorage.getItem("firstName", firstName)
// let lgname = localStorage.getItem("lastName", lastName)
// let ugserNum = localStorage.getItem("userNumber", userNumber)
// let UgserAdd = localStorage.getItem("userAddress", userAddress)
// let ngexKin = localStorage.getItem("nextofKin", nextofKin)
// let ngexKinNum = localStorage.getItem("nexofkinNumber", nexofkinNumber)
// let ggend = localStorage.getItem("gender", gender);
// let parsedDATA = JSON.parse(ggend)
// let gotten = [fgname,lgname,ugserNum,UgserAdd,ngexKin,ngexKinNum,ggend];

// console.log(gotten[3])

// function displayingTheStoredItems(theDetails) {
//     let items = ""
//     for(let i = 0; i <= theDetails.length; i++) {
//         items += `<li>${theDetails[i]}</li>`;
//     }
//     return items;
// }

// console.log(displayingTheStoredItems(gotten))


// display.textContent = gotten;


// let akatsuki = document.querySelector('akatsuki');

// akatsuki.textContent = parsedDATA

