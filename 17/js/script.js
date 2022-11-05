function difference() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    let differenceNumber = firstNumber - secondNumber;

    if(differenceNumber > 19){
        let doubleNumber = (firstNumber - secondNumber) * 3;
        document.getElementById("return").innerHTML = "Difference between two number is " + doubleNumber + " is Greater then 19.";
    }else if(differenceNumber < 19){
        document.getElementById("return").innerHTML = "Difference between two number is " + differenceNumber + " is Less then 19.";
    }else if(differenceNumber === 19){
        document.getElementById("return").innerHTML = "Difference between two number is " + differenceNumber + " is Equal to 19.";
    }else{
        document.getElementById("return").innerHTML = "Enter the both number.";
    }


    console.log(firstNumber);
    console.log(typeof firstNumber);
    console.log(secondNumber);
    console.log(typeof secondNumber);
    console.log(differenceNumber);
    console.log(typeof differenceNumber);
}