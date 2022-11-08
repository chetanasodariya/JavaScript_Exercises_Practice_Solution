// <................... w3resource ...................>

function valCheck(a, b) {
    if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
        return ((a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0));
    }
    else
        return false;
}
console.log(valCheck(14, 21));
console.log(valCheck(14, 20));
console.log(valCheck(16, 20));


// <................... My coding ...................>

// function check() {
//     let firstNumber = document.getElementById("firstNumber").value;
//     let secondNumber = document.getElementById("secondNumber").value;

//     firstNumber = parseInt(firstNumber);
//     secondNumber = parseInt(secondNumber);

//     if (firstNumber >= 0 && secondNumber >= 0) {
//         if ((firstNumber % 7 === 0 || firstNumber % 11 === 0) || (secondNumber % 7 === 0  || secondNumber % 11 === 0)) {
//             document.getElementById("outputResult").innerHTML = "User enter first or second number is multiple of 7 or 11.";
//         } else {
//             document.getElementById("outputResult").innerHTML = "User enter first or second number is negative number";
//         }
//     }

//     document.getElementById("outputFirstNumber").innerHTML = "User enter first number is " + firstNumber;
//     document.getElementById("outputSecondNumber").innerHTML = "User enter second number is " + secondNumber;

//     console.log(firstNumber);
//     console.log(typeof firstNumber);
//     console.log(secondNumber);
//     console.log(typeof secondNumber);
// }