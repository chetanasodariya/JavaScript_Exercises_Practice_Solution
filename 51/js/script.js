// <................... w3resource ...................>

function time_convert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + ":" + minutes;
}

console.log(time_convert(71));
console.log(time_convert(450));
console.log(time_convert(1441));

// <................... My coding ...................>

// function check() {
//     let d = document.getElementById("number").value;
//     d = parseInt(d);

//     var hours = Math.floor(d / 60);
//     var minutes = d % 60;

//     let out = hours + ":" + minutes;

//     document.getElementById("output").innerHTML = out;
// }

// function check() {
//     let d = document.getElementById("number").value;
//     d = parseInt(d);
//     d = Number(d);
//     var h = Math.floor(d / 3600);
//     var m = Math.floor(d % 3600 / 60);
//     var s = Math.floor(d % 3600 % 60);

//     var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
//     var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
//     var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
//     let out = hDisplay + mDisplay + sDisplay;

//     document.getElementById("output").innerHTML = out;
// }