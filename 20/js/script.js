function check(){
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    if(firstNumber > 0){
        document.getElementById("return1").innerHTML = "First number is Positive.";
    }else if(firstNumber < 0){
        document.getElementById("return1").innerHTML = "First number is Negative.";
    }else if(firstNumber === 0){
        document.getElementById("return1").innerHTML = "First number is Equal to 0.";
    }else{
        document.getElementById("return1").innerHTML = "Enter the first number.";
    }

    if(secondNumber > 0){
        document.getElementById("return2").innerHTML = "Second number is Positive.";
    }else if(secondNumber < 0){
        document.getElementById("return2").innerHTML = "Second number is Negative.";
    }else if(secondNumber === 0){
        document.getElementById("return2").innerHTML = "Second number is Equal to 0.";
    }else{
        document.getElementById("return2").innerHTML = "Enter the second number.";
    }

    // if((firstNumber > 0) && (secondNumber > 0)){
    //     document.getElementById("return1").innerHTML = "Number is Positive.";
    // }else if((firstNumber < 0) && (secondNumber < 0)){
    //     document.getElementById("return1").innerHTML = "Number is Negative.";
    // }else if((firstNumber === 0) && (secondNumber === 0)){
    //     document.getElementById("return1").innerHTML = "Number is Equal to 0.";
    // }else{
    //     document.getElementById("return1").innerHTML = "Enter the number";
    // }


    console.log(firstNumber);
    console.log(typeof firstNumber);
    console.log(secondNumber);
    console.log(typeof secondNumber);
}