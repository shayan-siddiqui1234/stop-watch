// function stopwtch(){
//     console.log("Your time Start now")
// }
// setInterval(stopwtch,1000)


// function stopwatch(){
//     console.log("shayan are you ready")
// }
// setTimeOut(stopwatch,100)

// function stopwtch(){
//     console.log("Your time Start now")
// }
// setTimeout(stopwtch,1000)


var minHead = document.getElementById("min")
var secHead = document.getElementById("sec")
var msecHead = document.getElementById("msec")

var min = 0;
var sec = 0;
var msec = 0;
var interval;

function timer(){
    msec++
    msecHead.innerHTML = msec

    if(msec % 100 ==0){
    sec++
    secHead.innerHTML = sec
}
else if(sec == 60){
    min++
    minHead.innerHTML = min
    sec = 0
}
}

function start(){
    interval = setInterval(timer,10)
}
 function pause(){
     clearInterval(interval)
 }

function reset(){
min = 00;
sec = 00;
msec = 00;
 msecHead.innerHTML=msec;
 secHead.innerHTML=sec;
 minHead.innerHTML=min;
 clearInterval(interval)

}



