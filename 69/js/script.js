// <................... w3resource ...................>

function sum_three(nums) {
    return nums[0] + nums[1] + nums[2];
}

console.log(sum_three([10, 32, 20]));
console.log(sum_three([5, 7, 9]));
console.log(sum_three([0, 8, -11]));

// <................... My coding ...................>

function check(){
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let thirdNumber = document.getElementById("thirdNumber").value;

    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    thirdNumber = parseInt(thirdNumber);

    let sum = firstNumber + secondNumber + thirdNumber;

    document.getElementById("outputFirstNumber").innerHTML = "User enter first number is " + firstNumber + ".";
    document.getElementById("outputSecondNumber").innerHTML = "User enter second number is " + secondNumber + ".";
    document.getElementById("outputThirdNumber").innerHTML = "User enter third number is " + thirdNumber + ".";
    document.getElementById("output").innerHTML = "Sum of three number is " + sum + ".";

    console.log(firstNumber);
    console.log(typeof firstNumber);
    console.log(secondNumber);
    console.log(typeof secondNumber);
    console.log(thirdNumber);
    console.log(typeof thirdNumber);
    console.log(sum);
    console.log(typeof sum);
}