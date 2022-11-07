// <................... w3resource ...................>

function cToF(celsius) {
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
}
cToF(60);
fToC(45);


// <................... My coding ...................>

// var cel = document.getElementById("cel");
// var fah = document.getElementById("fah");

// cel.addEventListener('input', function () {
//     let c = this.value;
//     let f = (c * 9 / 5) + 32;
//     if (!Number.isInteger(f)) {
//         f = f.toFixed(4);
//     }
//     fah.value = f;
// });

// fah.addEventListener('input', function () {
//     let f = this.value;
//     let c = (f - 32) * 5 / 9;
//     if (!Number.isInteger(c)) {
//         c = c.toFixed(4);
//     }
//     cel.value = c;
// });