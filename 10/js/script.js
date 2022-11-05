function multiply(){
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    document.getElementById("result").innerHTML = firstNumber * secondNumber;

    console.log(firstNumber);
    console.log(typeof firstNumber);
    console.log(secondNumber);
    console.log(typeof secondNumber);

}


function divide(){
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    document.getElementById("result").innerHTML = firstNumber / secondNumber;

    console.log(firstNumber);
    console.log(typeof firstNumber);
    console.log(secondNumber);
    console.log(typeof secondNumber);

}