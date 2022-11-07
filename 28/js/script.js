// <................... w3resource ...................>

function check_numbers(x, y) {
    if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(check_numbers(12, 101));
console.log(check_numbers(52, 80));
console.log(check_numbers(15, 99));



// <................... My coding ...................>

// function check() {
//     let firstNumber = document.getElementById("firstNumber").value;
//     let secondNumber = document.getElementById("secondNumber").value;
//     firstNumber = parseInt(firstNumber);
//     secondNumber = parseInt(secondNumber);

//     if((firstNumber >= 50 && firstNumber <= 99) || (secondNumber >= 50 && secondNumber <= 99)){
//         document.getElementById("return").innerHTML = "The user enter number is range 50 to 99.";
//     }else{
//         document.getElementById("return").innerHTML = "The user enter number is NOT range 50 to 99.";
//     }

//     console.log(firstNumber);
//     console.log(typeof firstNumber);
//     console.log(secondNumber);
//     console.log(typeof secondNumber);
// }