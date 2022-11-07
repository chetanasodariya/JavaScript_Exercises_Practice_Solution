// <................... w3resource ...................>

function three_numbers(x, y, z) {
    if (x == y && y == z) {
        return 30;
    }

    if (x == y || y == z || z == x) {
        return 40;
    }

    return 20;
}
console.log(three_numbers(8, 8, 8));
console.log(three_numbers(8, 8, 18));
console.log(three_numbers(8, 7, 18));


// <................... My coding ...................>

// function check() {
//     let firstNumber = document.getElementById("firstNumber").value;
//     let secondNumber = document.getElementById("secondNumber").value;
//     let thirdNumber = document.getElementById("thirdNumber").value;

//     firstNumber = parseInt(firstNumber);
//     secondNumber = parseInt(secondNumber);
//     thirdNumber = parseInt(thirdNumber);

//     if(firstNumber === secondNumber && secondNumber === thirdNumber){
//         document.getElementById("outputResult").innerHTML = "Output is :- " + 30;
//     }else if((firstNumber === secondNumber)|| (firstNumber === thirdNumber) || (secondNumber === thirdNumber)){
//         document.getElementById("outputResult").innerHTML = "Output is :- " + 40;
//     }else{
//         document.getElementById("outputResult").innerHTML = "Output is :- " + 20;
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