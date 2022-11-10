// <................... w3resource ...................>

function division_string(n1, n2) {

    n1 = 80;
    n2 = 6;

    var div = Math.round(n1 / n2).toString(),
        result_array = div.split("");

    if (div >= 1000) {
        for (var i = div.length - 3; i > 0; i -= 3) {
            result_array.splice(i, 0, ",");
        }
        result_array;
    }
    console.log(result_array);
}
division_string();

// <................... My coding ...................>

function check() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    let divide = Math.round(firstNumber / secondNumber).toString(), result = divide.split("");

    if(divide >= 1000){
        for (let j = divide.length - 3; i > 0; i -= 3){
            result.splice(i, 0 , ",");
        }
        result;
    }

    document.getElementById("outputFirstNumber").innerHTML = "User enter first number is " + firstNumber + ".";
    document.getElementById("outputSecondNumber").innerHTML = "User enter second number is " + secondNumber + ".";
    document.getElementById("outputResultNumber").innerHTML = "User enter first and second number divide is " + result + ".";

    console.log(firstNumber);
    console.log(typeof firstNumber);
    console.log(secondNumber);
    console.log(typeof secondNumber);
    console.log(divide);
    console.log(typeof divide);
    console.log(divide);
    console.log(typeof divide);
}