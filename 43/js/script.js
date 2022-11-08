// <................... w3resource ...................>

function same_last_digit(p, q, r) {
    return (p % 10 === q % 10) || (p % 10 === r % 10) || (q % 10 === r % 10);
}

console.log(same_last_digit(22,32,42));
console.log(same_last_digit(102,302,2));
console.log(same_last_digit(20,22,45));

// <................... My coding ...................>

// function check(){
//     let firstNumber = document.getElementById("firstNumber").value;
//     let secondNumber = document.getElementById("secondNumber").value;
//     let thirdNumber = document.getElementById("thirdNumber").value;

//     firstNumber = parseInt(firstNumber);
//     secondNumber = parseInt(secondNumber);
//     thirdNumber = parseInt(thirdNumber);
    
//     let first = firstNumber % 10;
//     let second = secondNumber % 10;
//     let third = thirdNumber % 10;

//     if(first === second){
//         document.getElementById("outputResult").innerHTML = true;
//     }else if(second === third){
//         document.getElementById("outputResult").innerHTML = true;
//     }else if(third === first){
//         document.getElementById("outputResult").innerHTML = true;
//     }else{
//         document.getElementById("outputResult").innerHTML = false;
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
//     console.log(first);
//     console.log(typeof first);
//     console.log(second);
//     console.log(typeof second);
//     console.log(third);
//     console.log(typeof third);
// }