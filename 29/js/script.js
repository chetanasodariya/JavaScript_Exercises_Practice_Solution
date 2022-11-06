function check() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let thirdNumber = document.getElementById("thirdNumber").value;
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    thirdNumber = parseInt(thirdNumber);

    if((firstNumber >= 50 && firstNumber <= 99) || (secondNumber >= 50 && secondNumber <= 99) || (thirdNumber >= 50 && thirdNumber <= 99)){
        document.getElementById("return").innerHTML = "The user enter number is range 50 to 99.";
    }else{
        document.getElementById("return").innerHTML = "The user enter number is NOT range 50 to 99.";
    }

    console.log(firstNumber);
    console.log(typeof firstNumber);
    console.log(secondNumber);
    console.log(typeof secondNumber);
    console.log(thirdNumber);
    console.log(typeof thirdNumber);
}