// <................... w3resource ...................>

function max_townums_range(x, y) {
    if ((x >= 40) && (x <= 60) && (y >= 40 && y <= 60)) {
        if (x === y) {
            return "Numbers are the same";
        } else if (x > y) {
            return x;
        } else {
            return y;
        }
    } else {
        return "Numbers don't fit in range";
    }
}

console.log(max_townums_range(45, 60));
console.log(max_townums_range(25, 60));
console.log(max_townums_range(45, 80));


// <................... My coding ...................>

// function check() {
//     let firstNumber = document.getElementById("firstNumber").value;
//     let secondNumber = document.getElementById("secondNumber").value;

//     firstNumber = parseInt(firstNumber);
//     secondNumber = parseInt(secondNumber);

//     if((firstNumber >= 40 && firstNumber <= 60) && (secondNumber >= 40 && secondNumber <= 60)){
//         if(firstNumber > secondNumber){
//             document.getElementById("return").innerHTML = "The user enter number is range 40 to 60. The larger number is " + firstNumber;
//         }else{
//             document.getElementById("return").innerHTML = "The user enter number is range 40 to 60. The larger number is " + secondNumber;
//         }
//     }else{
//         document.getElementById("return").innerHTML = "The user enter number is NOT range 40 to 60.";
//     }

//     console.log(firstNumber);
//     console.log(typeof firstNumber);
//     console.log(secondNumber);
//     console.log(typeof secondNumber);
// }