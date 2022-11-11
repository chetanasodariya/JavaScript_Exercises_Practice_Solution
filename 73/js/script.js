// <................... w3resource ...................>

function reverse3(array) {
    return array.map((element, idx, arr) => arr[(arr.length - 1) - idx]);
}

console.log(reverse3([5, 4, 3])); 
console.log(reverse3([1, 0, -1]));  
console.log(reverse3([2, 3, 1]));

// <................... My coding ...................>

function check(){
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let thirdNumber = document.getElementById("thirdNumber").value;
    
    let newArray = [];
    
    let outputArray = newArray.push(thirdNumber, secondNumber, firstNumber);

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