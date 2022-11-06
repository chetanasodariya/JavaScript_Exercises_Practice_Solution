function check() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    if((firstNumber >= 40 && firstNumber <= 60 && secondNumber >= 40 && secondNumber <= 60) || (firstNumber >= 70 && firstNumber <= 100 && secondNumber >= 70 && secondNumber <= 100)){
        document.getElementById("return").innerHTML = true;
    }else{
        document.getElementById("return").innerHTML = false;
    }

    // if((firstNumber >= 40 && firstNumber <= 60) || (secondNumber >= 40 && secondNumber <= 60)){
    //     document.getElementById("return").innerHTML = "The user enter number is range 40 to 60.";
    // }else if((firstNumber >= 70 && firstNumber <= 100) || (secondNumber >= 70 && secondNumber <= 100)){
    //     document.getElementById("return").innerHTML = "The user enter number is range 70 to 100.";
    // }else{
    //     document.getElementById("return").innerHTML = "The user enter number is NOT range 40 to 60 or in the range 70 to 100 inclusive.";
    // }
    
    // if(firstNumber >= 40 && firstNumber <= 60){
    //     document.getElementById("return1").innerHTML = "The user enter first number is range 40 to 60.";
    // }else if(firstNumber >= 70 && firstNumber <= 100){
    //     document.getElementById("return1").innerHTML = "The user enter first number is range 70 to 100.";
    // }else{
    //     document.getElementById("return1").innerHTML = "The user enter first number is NOT range 40 to 60 or in the range 70 to 100 inclusive.";
    // }
    
    // if(secondNumber >= 40 && secondNumber <= 60){
    //     document.getElementById("return2").innerHTML = "The user enter second number is range 40 to 60.";
    // }else if(secondNumber >= 70 && secondNumber <= 100){
    //     document.getElementById("return2").innerHTML = "The user enter second number is range 70 to 100.";
    // }else{
    //     document.getElementById("return2").innerHTML = "The user enter second number is NOT range 40 to 60 or in the range 70 to 100 inclusive.";
    // }

    console.log(firstNumber);
    console.log(typeof firstNumber);
    console.log(secondNumber);
    console.log(typeof secondNumber);
}