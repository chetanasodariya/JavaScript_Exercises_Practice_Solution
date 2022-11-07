// <................... w3resource ...................>

function number_order(x, y, z) {
    if (y > x && z > y) {
        return "strict mode";
    }
    else if (z > y)
        return "Soft mode";
    else
        return "Undefined";
}

console.log(number_order(10, 15, 31));
console.log(number_order(24, 22, 31));
console.log(number_order(50, 21, 15));


// <................... My coding ...................>

// function check(){
//     let firstNumber = document.getElementById("firstNumber").value;
//     let secondNumber = document.getElementById("secondNumber").value;
//     let thirdNumber = document.getElementById("thirdNumber").value;

//     firstNumber = parseInt(firstNumber);
//     secondNumber = parseInt(secondNumber);
//     thirdNumber = parseInt(thirdNumber);

//     if(secondNumber > firstNumber && thirdNumber > secondNumber){
//         document.getElementById("outputResult").innerHTML = "User enter number is going on strict mode.";
//     }else if(thirdNumber > secondNumber){
//         document.getElementById("outputResult").innerHTML = "User enter number is going on Soft mode.";
//     }else{
//         document.getElementById("outputResult").innerHTML = "User enter number is going on Undefined mode.";
//     }

//     document.getElementById("outputFirstNumber").innerHTML = "User enter first number is " + firstNumber;
//     document.getElementById("outputSecondNumber").innerHTML = "User enter second number is " + secondNumber;
//     document.getElementById("outputThirdNumber").innerHTML = "User enter third number is " + thirdNumber;

//     console.log(firstNumber);
//     console.log(typeof firstNumber);
//     console.log(secondNumber);
//     console.log(typeof secondNumber);
//     console.log(thirdNumber);
//     console.log(typeof thirdNumber);
// }