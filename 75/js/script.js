// <................... w3resource ...................>

function middle_elements(a, b) {
    var new_array = []
    new_array.push(a[1], b[1]);

    return new_array;
}
console.log(middle_elements([1, 2, 3], [1, 5, 6]));
console.log(middle_elements([3, 3, 3], [2, 8, 0]));
console.log(middle_elements([4, 2, 7], [2, 4, 5]));

// <................... My coding ...................>

function check() {
    let firstNumber1 = document.getElementById("firstNumber1").value;
    let secondNumber1 = document.getElementById("secondNumber1").value;
    let thirdNumber1 = document.getElementById("thirdNumber1").value;

    let firstNumber2 = document.getElementById("firstNumber2").value;
    let secondNumber2 = document.getElementById("secondNumber2").value;
    let thirdNumber2 = document.getElementById("thirdNumber2").value;

    let array1 = [];
    let array2 = [];
    let array3 = [];

    let output1 = array1.push(firstNumber1, secondNumber1, thirdNumber1);
    let output2 = array2.push(firstNumber2, secondNumber2, thirdNumber2);
    let output3 = array3.push(secondNumber1, secondNumber2);

    document.getElementById("output").innerHTML = array3;

    console.log(firstNumber1);
    console.log(typeof firstNumber1);
    console.log(secondNumber1);
    console.log(typeof secondNumber1);
    console.log(thirdNumber1);
    console.log(typeof thirdNumber1);
    console.log(firstNumber2);
    console.log(typeof firstNumber2);
    console.log(secondNumber2);
    console.log(typeof secondNumber2);
    console.log(thirdNumber2);
    console.log(typeof thirdNumber2);
    console.log(array1);
    console.log(typeof array1);
    console.log(array2);
    console.log(typeof array2);
    console.log(array3);
    console.log(typeof array3);
    console.log(output1);
    console.log(typeof output1);
    console.log(output2);
    console.log(typeof output2);
    console.log(output3);
    console.log(typeof output3);
}