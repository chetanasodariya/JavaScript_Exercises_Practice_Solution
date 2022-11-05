let d = new Date();

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let day = weekday[d.getDay()];

let hTime = d.getHours();

if(hTime <= 12){
    hTime = hTime + " AM";
}else{
    hTime = hTime + " PM";
}

let mTime = d.getMinutes();

let sTime = d.getSeconds();

document.getElementById("day").innerHTML = "Today is " + day

document.getElementById("time").innerHTML = "Current time is " + hTime + " : " + mTime + " : " + sTime

console.log("Today is " + day);

console.log("Current time is " + hTime + " : " + mTime + " : " + sTime);