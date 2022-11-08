// <................... w3resource ...................>

function lessby20_others(x, y, z) 
{
return (x >= 20 && (x < y || x < z)) ||
(y >= 20 && (y < x || y < z)) ||
(z >= 20 && (z < y || z < x));
}
console.log(lessby20_others(23, 45, 10));
console.log(lessby20_others(23, 23, 10));
console.log(lessby20_others(21, 66, 75));


// <................... My coding ...................>

// function check(){
//     let firstNumber = document.getElementById("firstNumber").value;
//     let secondNumber = document.getElementById("secondNumber").value;
//     let thirdNumber = document.getElementById("thirdNumber").value;

//     firstNumber = parseInt(firstNumber);
//     secondNumber = parseInt(secondNumber);
//     thirdNumber = parseInt(thirdNumber);
    
//     if(firstNumber >= 20 && (firstNumber < secondNumber || firstNumber < thirdNumber)){
//         document.getElementById("outputResult").innerHTML = "User enter first number is equal or greater then 20. But first number is less then second or third number.";
//     }else if(secondNumber >= 20 && (secondNumber < firstNumber || secondNumber < thirdNumber)){
//         document.getElementById("outputResult").innerHTML = "User enter second number is equal or greater then 20. But second number is less then first or third number.";
//     }else if(thirdNumber >= 20 && (thirdNumber < firstNumber || thirdNumber < secondNumber)){
//         document.getElementById("outputResult").innerHTML = "User enter third number is equal or greater then 20. But third number is less then first or second number.";
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
// }