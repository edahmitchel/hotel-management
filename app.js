const firstName = document.querySelector("#inputName").value;
const lastName = document.querySelector("#inputLastName").value;
const userNumber = document.querySelector("#inputNumber").value;
const userAddress = document.querySelector("#inputAddress").value;
const nextofKin = document.querySelector("#inputNextOfKin").value;
const nexofkinNumber = document.querySelector("#inputNextOfKinNumber").value;
const submitBtn = document.querySelector('#submitBtn')
const yourNam = document.querySelector("#yourNam")
const yourNumber = document.querySelector("#yourNumber")
const resvPass = document.querySelector("#resvPass")
const total = document.querySelector("#total")
const days = document.querySelector("#days").value;
console.log(days)
// const gender = document.querySelector("#inputState").value;
const random = Math.floor(Math.random() * 1000);

const amount = 999;
tot = amount * days;
console.log(tot)
submitBtn.addEventListener('click', e => {
    e.preventDefault();
    let theData = JSON.stringify({
        fname: firstName,
        lname: lastName,
        userNum: userNumber,
        userAdd: userAddress,
        nextofKin: nextofKin,
        dayz: days*1,
        nexkinNum: nexofkinNumber
        // gend: gender 
    })
    const amount = 999;
    tot = amount * days;
    console.log(tot)
localStorage.setItem('theData', theData)
localStorage.getItem('theData', theData);
    if (localStorage == "") {
        console.log("empty")
    }else{
        localStorage.clear();
        localStorage.setItem('theData', theData)
        displayForm()
        console.log("done")
    }
    // let arr = [];
    // arr.push(theData)
    // localStorage.setItem('data', JSON.stringify(theData))
    
})

function displayForm(){
    let gotIt = JSON.parse(localStorage.getItem('theData'))
    yourNam.textContent = "Name: " + gotIt.fname + " " + gotIt.lname;
    yourNumber.textContent = "Phone Number: " + gotIt.userNum;
    // console.log(gotIt)
}



//DISPLAY GOTTEN
let yourName = document.querySelector("#yourName")
let yourNum = document.querySelector("#yourNumb")
let genderr = document.querySelector("#genderr")
let addr = document.querySelector("#addr")
let keym = document.querySelector("#keym")
let randd = Math.trunc(Math.random() * 10000);
// console.log(display)

// submitBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     let theData = {
//         fname: firstName,
//         lname: lastName,
//         userNum: userNumber,
//         userAdd: userAddress,
//         nextofKin: nextofKin,
//         nexkinNum: nexofkinNumber,
//         gend: gender 
//     }

//     if (theData.value === null) {
//         console.log("empty")
//     }else{
//         console.log("it's plenty");
//     }
//     // console.log(locale);
//     displayForm();
//     // document.querySelector("#inputNextOfKinNumber").value = " ";
//     // document.querySelector("#inputName").value = " ";
//     // document.querySelector("#inputLastName").value = " ";
//     // document.querySelector("#inputNumber").value = " ";
//     // document.querySelector("#inputAddress").value = " ";
//     // document.querySelector("#inputNextOfKin").value = " "; 
// });



   /* document.querySelector("#inputNextOfKinNumber").value = " ";
    document.querySelector("#inputName").value = " ";
    document.querySelector("#inputLastName").value = " ";
    document.querySelector("#inputNumber").value = " ";
    document.querySelector("#inputAddress").value = " ";
    document.querySelector("#inputNextOfKin").value = " ";*/


//DISPLAYING THE FORM

//STORING ON LOCAL STORAGE
// let fname = localStorage.setItem("firstName", firstName)
// let lname = localStorage.setItem("lastName", lastName)
// let userNum = localStorage.setItem("userNumber", userNumber)
// let UserAdd = localStorage.setItem("userAddress", userAddress)
// let nexKin = localStorage.setItem("nextofKin", nextofKin)
// let nexKinNum = localStorage.setItem("nexofkinNumber", nexofkinNumber)
// let gend = localStorage.setItem("gender", gender);

/*let sendData = JSON.stringify({fname: firstName,lname: lastName, userNum: userNumber, userAdd: userAddress, nextofKin: nextofKin, nexkinNum: nexofkinNumber, gend: gender })
localStorage.setItem("appData", sendData);
console.log(JSON.parse(localStorage.getItem("appData", sendData)))*/


// SENDING TO PAYOUTPAGE
// let gottenInfo = document.querySelector("#gottenInfo");
// let yourNumb = document.querySelector("#yourNumb");
// let genderr = document.querySelector("#genderr");
// let addre = document.querySelector("#addre");
// let info = localStorage.getItem("appData");
// let yourName = document.querySelector("#yourName");
// gottenInfo = JSON.parse(info)


// gottenInfo.textContent = `${firstName}`;
// yourNumb.textContent = `${userNumber}`;
// genderr.textContent = `${gender}`;
// addre.textContent = `${userAddress}`;
// yourName.innerHTML = `${userNumber}`
// console.log(yourName)
// console.log(typeof(gottenInfo))
// document.querySelector("#gottenInfo").innerHTML = gottenInfo
// console.log(gottenInfo)
// yourName.textContent = `${firstName} ${lastName}`



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



/* let getLocal = localStorage.getItem('formData');

    if (getLocal == null) {
        itemsObj = [];
    }else{
        itemsObj = JSON.parse(FormData);
    }

    itemsObj.push(theData.value)

    let locale = localStorage.setItem('formData', JSON.stringify(theData)) */

