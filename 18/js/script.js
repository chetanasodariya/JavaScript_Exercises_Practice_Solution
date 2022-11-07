// <................... w3resource ...................>

function test50(x, y) {
    return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test50(50, 50))
console.log(test50(20, 50))
console.log(test50(20, 20))
console.log(test50(20, 30))


// <................... My coding ...................>

// function check(){
//     let firstNumber = document.getElementById("firstNumber").value;
//     let secondNumber = document.getElementById("secondNumber").value;

//     firstNumber = parseInt(firstNumber);
//     secondNumber = parseInt(secondNumber);

//     let sum = firstNumber + secondNumber;

//     if(firstNumber === 50){
//         document.getElementById("return").innerHTML = "True, First number is = 50.";
//     }else if(secondNumber === 50){
//         document.getElementById("return").innerHTML = "True, Second number is = 50.";
//     }else if(sum === 50){
//         document.getElementById("return").innerHTML = "True, Sum of two numbers is = 50.";
//     }else{
//         document.getElementById("return").innerHTML = "False, Because First number OR Second number OR Sum of two number is NOT Equal to 50.";
//     }




//     console.log(firstNumber);
//     console.log(typeof firstNumber);
//     console.log(secondNumber);
//     console.log(typeof secondNumber);
//     console.log(sum);
//     console.log(typeof sum);
// }