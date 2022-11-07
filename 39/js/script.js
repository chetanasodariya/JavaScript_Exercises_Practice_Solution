// <................... w3resource ...................>

function sortaSum(x, y) {
    const sum_nums = x + y;
    if (sum_nums >= 50 && sum_nums <= 80) {
        return 65;
    }
    return 80;
}

console.log(sortaSum(30, 20));
console.log(sortaSum(90, 80));


// <................... My coding ...................>

// function check() {
//     let firstNumber = document.getElementById("firstNumber").value;
//     let secondNumber = document.getElementById("secondNumber").value;

//     firstNumber = parseInt(firstNumber);
//     secondNumber = parseInt(secondNumber);

//     let sumOfTwo = firstNumber + secondNumber;

//     if(sumOfTwo >= 50 && sumOfTwo <= 80){
//         document.getElementById("outputResult").innerHTML = 65;
//     }else{
//         document.getElementById("outputResult").innerHTML = 80;
//     }

//     document.getElementById("outputFirstNumber").innerHTML = "User enter first number is " + firstNumber;
//     document.getElementById("outputSecondNumber").innerHTML = "User enter second number is " + secondNumber;

//     console.log(firstNumber);
//     console.log(typeof firstNumber);
//     console.log(secondNumber);
//     console.log(typeof secondNumber);
//     console.log(sumOfTwo);
//     console.log(typeof sumOfTwo);
// }