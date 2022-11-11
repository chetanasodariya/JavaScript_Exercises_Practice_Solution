// <................... w3resource ...................>

function rotate_elements_left(array) {
    return [array[1], array[2], array[0]];
}
console.log(rotate_elements_left([3, 4, 5]));
console.log(rotate_elements_left([0, -1, 2]));
console.log(rotate_elements_left([7, 6, 5]));

// <................... My coding ...................>

function check(){
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let thirdNumber = document.getElementById("thirdNumber").value;
    
    let newArray = [];
    
    let outputArray = newArray.push(secondNumber, thirdNumber, firstNumber);

    document.getElementById("output").innerHTML = "New array is " + newArray + ".";

    console.log(firstNumber);
    console.log(typeof firstNumber);
    console.log(secondNumber);
    console.log(typeof secondNumber);
    console.log(thirdNumber);
    console.log(typeof thirdNumber);
    console.log(newArray);
    console.log(typeof newArray);
    console.log(outputArray);
    console.log(typeof outputArray);
}