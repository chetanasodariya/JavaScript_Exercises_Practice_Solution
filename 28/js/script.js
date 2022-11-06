function check() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    if((firstNumber >= 50 && firstNumber <= 99) || (secondNumber >= 50 && secondNumber <= 99)){
        document.getElementById("return").innerHTML = "The user enter number is range 50 to 99.";
    }else{
        document.getElementById("return").innerHTML = "The user enter number is NOT range 50 to 99.";
    }

    console.log(firstNumber);
    console.log(typeof firstNumber);
    console.log(secondNumber);
    console.log(typeof secondNumber);
}