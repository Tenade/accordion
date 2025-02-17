let myHours = document.getElementById("myHours")
let myMinutes = document.getElementById("myMinutes")
let mySeconds = document.getElementById("mySeconds")
let inputHour = document.getElementById("inputHour")
let inputMinute = document.getElementById("inputMinute")
//let stopalarm1 = document.getElementById('stopalarm1')

let alarms = document.getElementById("alarms")
//console.log(alarms.innerHTML)
let eachalarm = {}
// Main Clock
function myTime() {
    myHours.innerHTML = new Date().getHours()
    myMinutes.innerHTML = new Date().getMinutes()
    mySeconds.innerHTML = new Date().getSeconds()
}
setInterval(myTime, 1)

// Icon Timing
let alarmicon = document.getElementById("alarmicon");
// Audio Functions
let myAudio = document.getElementById('mySound')
let soundAlarm
// localStorage Functions
//let localval2 = []
//localval2 = localStorage.getItem("timeset")
//localval2 = JSON.parse(localval2)
let myAlarms = JSON.parse(localStorage.getItem("timeset"))

if (myAlarms !== null) {
    true
} else {
    myAlarms = []
    localStorage.setItem("timeset", JSON.stringify(myAlarms))
}

//console.log(myAlarms)
for (let i = 0; i < myAlarms.length; i++) {
    alarms.innerHTML += `<div class="bg-white d-flex p-4 card my-3">
            <p class="text-center display-5"><span class="thehour">${myAlarms[i].input1}</span>:<span class="theminute">${myAlarms[i].input2}</span></p>
            <div class="d-flex gap-3">
                <button type="button" class="button-small btn btn-outline-dark border-secondary mx-auto" onclick=delAlarm(${i})>Delete</button>
                <button type="button" class="button-small btn btn-outline-dark border-secondary mx-auto" onclick="editAlarm(${i})">Edit</button>
            </div>
        </div>`
    //console.log(myAlarms[i].input1, myAlarms[i].input2)
    /*if (myAlarms[i].input1 == new Date().getHours() && myAlarms[i].input2 == new Date().getMinutes()) {
        stopalarm1.style.display = "flex"
    } else {
        stopalarm1.style.display = "none"
    }*/
    soundAlarm = setInterval(() => {
        if (myAlarms[i].input1 == new Date().getHours() && myAlarms[i].input2 == new Date().getMinutes()) {
            myAudio.play()
            myAudio.loop = true
            alarmicon.classList.add("animate__swing")
        }
        else {
            myAudio.pause()
            alarmicon.classList.remove("animate__swing")
        }
    }, 1000)
}

// Set Alarm Button
function setAlarm() {
    eachalarm = {
        input1: Number(inputHour.value),
        input2: Number(inputMinute.value)
    }
    myAlarms.push(eachalarm)
    localStorage.setItem("timeset", JSON.stringify(myAlarms))

    alarms.innerHTML = ""
    for (let i = 0; i < myAlarms.length; i++) {
        alarms.innerHTML += `<div class="bg-light d-flex p-4 card my-3">
                <p class="text-center display-5"><span class="thehour">${myAlarms[i].input1}</span>:<span class="theminute">${myAlarms[i].input2}</span></p>
                <div class="d-flex gap-3">
                    <button type="button" class="button-small btn btn-outline-dark border-secondary mx-auto" onclick=delAlarm(${i})>Delete</button>
                    <button type="button" class="button-small btn btn-outline-dark border-secondary mx-auto" onclick="editAlarm(${i})">Edit</button>
                </div>
            </div>`
        soundAlarm = setInterval(() => {
            if (myAlarms[i].input1 == new Date().getHours() && myAlarms[i].input2 == new Date().getMinutes()) {
                //console.log(myAlarms[i].input1, ":", myAlarms[i].input2)
                myAudio.play()
                //stopalarm1.style.display = "flex"
                myAudio.loop = true
                alarmicon.classList.add("animate__swing")

            }
            else {
                myAudio.pause()
                alarmicon.classList.remove("animate__swing")
                //stopalarm1.style.display = "none"
            }
        }, 1000)
    }
}

//Delete Button
function delAlarm(i) {
    myAlarms.splice(i, 1)
    alarms.innerHTML = ""
    myAlarms = JSON.stringify(myAlarms)
    localStorage.setItem("timeset", myAlarms)
    myAlarms = localStorage.getItem("timeset")
    myAlarms = JSON.parse(myAlarms)
    for (let i = 0; i < myAlarms.length; i++) {
        alarms.innerHTML += `<div class="bg-light d-flex p-4 card my-3">
                <p class="text-center display-5"><span class="thehour">${myAlarms[i].input1}</span>:<span class="theminute">${myAlarms[i].input2}</span></p>
                <div class="d-flex gap-3">
                    <button type="button" class="button-small btn btn-outline-dark border-secondary mx-auto" onclick=delAlarm(${i})>Delete</button>
                    <button type="button" class="button-small btn btn-outline-dark border-secondary mx-auto" onclick="editAlarm(${i})">Edit</button>
                </div>
            </div>`
        soundAlarm = setInterval(() => {
            if (myAlarms[i].input1 == new Date().getHours() && myAlarms[i].input2 == new Date().getMinutes()) {
                //console.log(myAlarms[i].input1, ":", myAlarms[i].input2)
                myAudio.play()
                //stopalarm1.style.display = "flex"
                myAudio.loop = true
                alarmicon.classList.add("animate__swing")
            }
            else {
                myAudio.pause()
                alarmicon.classList.remove("animate__swing")
                //stopalarm1.style.display = "none"
            }
        }, 1000)
    }
}

// Edit Button
function editAlarm(i) {
    let edit1 = prompt("Enter The Hours:", `${myAlarms[i].input1}`)
    let edit2 = prompt("Enter The Minutes:", `${myAlarms[i].input2}`)
    eachalarm = {
        input1: Number(edit1),
        input2: Number(edit2)
    }
    let asca = []
    myAlarms.splice(i, 1, eachalarm)
    localStorage.setItem("timeset", JSON.stringify(myAlarms))
    alarms.innerHTML = ""

    for (let i = 0; i < myAlarms.length; i++) {
        alarms.innerHTML += `<div class="bg-light d-flex p-4 card my-3">
                <p class="text-center display-5"><span class="thehour">${myAlarms[i].input1}</span>:<span class="theminute">${myAlarms[i].input2}</span></p>
                <div class="d-flex gap-3">
                    <button type="button" class="button-small btn btn-outline-dark border-secondary mx-auto" onclick=delAlarm(${i})>Delete</button>
                    <button type="button" class="button-small btn btn-outline-dark border-secondary mx-auto" onclick="editAlarm(${i})">Edit</button>
                </div>
            </div>`
        soundAlarm = setInterval(() => {
            if (myAlarms[i].input1 == new Date().getHours() && myAlarms[i].input2 == new Date().getMinutes()) {
                //console.log(myAlarms[i].input1, ":", myAlarms[i].input2)
                myAudio.play()
                //stopalarm1.style.display = "flex"
                myAudio.loop = true
                alarmicon.classList.add("animate__swing")
            }
            else {
                myAudio.pause()
                alarmicon.classList.remove("animate__swing")
                //stopalarm1.style.display = "none"
            }
        }, 1000)
    }
}

// Stop Button
function stopalarm() {
    clearInterval(soundAlarm)
    myAudio.pause()
    alarmicon.classList.remove("animate__swing")
    //stopalarm1.style.display = "none"
}