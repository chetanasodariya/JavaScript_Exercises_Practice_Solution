function sum(){
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber =document.getElementById("secondNumber").value;

    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    
    if(firstNumber === secondNumber){
        let sameNumber = (firstNumber + secondNumber) * 3;
        document.getElementById("result").innerHTML = "The Sum of two number is " + sameNumber;
    }else{
        let sumNumber = firstNumber + secondNumber;
        document.getElementById("result").innerHTML = "The Sum of two number is " + sumNumber;
    }


    console.log(firstNumber);
    console.log(typeof firstNumber);
    console.log(secondNumber);
    console.log(typeof secondNumber);
}