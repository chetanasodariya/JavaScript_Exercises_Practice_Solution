function check() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    if((firstNumber >= 40 && firstNumber <= 60) && (secondNumber >= 40 && secondNumber <= 60)){
        if(firstNumber > secondNumber){
            document.getElementById("return").innerHTML = "The user enter number is range 40 to 60. The larger number is " + firstNumber;
        }else{
            document.getElementById("return").innerHTML = "The user enter number is range 40 to 60. The larger number is " + secondNumber;
        }
    }else{
        document.getElementById("return").innerHTML = "The user enter number is NOT range 40 to 60.";
    }

    console.log(firstNumber);
    console.log(typeof firstNumber);
    console.log(secondNumber);
    console.log(typeof secondNumber);
}