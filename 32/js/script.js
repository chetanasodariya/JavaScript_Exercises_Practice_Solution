function nearest() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);


    if (firstNumber !== secondNumber) {
        let first = Math.abs(firstNumber - 100);
        let second = Math.abs(secondNumber - 100);
        if (first < second) {
            document.getElementById("outputComputer").innerHTML = "first";
        } else if (second < first) {
            document.getElementById("outputComputer").innerHTML = "second";
        }
        return 0;
    }else{
        document.getElementById("outputComputer").innerHTML = "equal";
    }


    console.log(firstNumber);
    console.log(typeof firstNumber);
    console.log(secondNumber);
    console.log(typeof secondNumber);
}

