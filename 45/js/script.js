// <................... w3resource ...................>

function test_number(x, y) {
    return (x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15);
}

console.log(test_number(15, 9));
console.log(test_number(25, 15));
console.log(test_number(7, 8));
console.log(test_number(25, 10));
console.log(test_number(5, 9));
console.log(test_number(7, 9));
console.log(test_number(9, 25));


// <................... My coding ...................>

// function check(){
//     let firstNumber = document.getElementById("firstNumber").value;
//     let secondNumber = document.getElementById("secondNumber").value;

//     firstNumber = parseInt(firstNumber);
//     secondNumber = parseInt(secondNumber);
    
//     if(firstNumber === 15 || secondNumber === 15){
//         document.getElementById("outputResult").innerHTML = "User enter number is equal 15.";
//     }else if(firstNumber + secondNumber === 15 || Math.abs(firstNumber - secondNumber) === 15){
//         document.getElementById("outputResult").innerHTML = "User enter number sum or difference is equal to 15.";
//     }else{
//         document.getElementById("outputResult").innerHTML = "User enter number is NOT equal 15 or sum or difference is NOT equal to 15.";
//     }

//     document.getElementById("outputFirstNumber").innerHTML = "User enter first number is " + firstNumber;
//     document.getElementById("outputSecondNumber").innerHTML = "User enter second number is " + secondNumber;

//     console.log(firstNumber);
//     console.log(typeof firstNumber);
//     console.log(secondNumber);
//     console.log(typeof secondNumber);
// }