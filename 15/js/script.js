// <................... w3resource ...................>

function difference(n)
 {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
 }
console.log(difference(32))
console.log(difference(11))


// <................... My coding ...................>

// function difference() {
//     let firstNumber = document.getElementById("firstNumber").value;
//     let secondNumber = document.getElementById("secondNumber").value;
    
//     firstNumber = parseInt(firstNumber);
//     secondNumber = parseInt(secondNumber);

//     let differenceNumber = firstNumber - secondNumber;

//     if(differenceNumber > 13){
//         let doubleNumber = differenceNumber + differenceNumber;
//         document.getElementById("return").innerHTML = "Difference between two number is " + doubleNumber + " is Greater then 13.";
//     }else if(differenceNumber < 13){
//         document.getElementById("return").innerHTML = "Difference between two number is " + differenceNumber + " is Less then 13.";
//     }else if(differenceNumber === 13){
//         document.getElementById("return").innerHTML = "Difference between two number is " + differenceNumber + " is Equal to 13.";
//     }else{
//         document.getElementById("return").innerHTML = "Enter the both number.";
//     }


//     console.log(firstNumber);
//     console.log(typeof firstNumber);
//     console.log(secondNumber);
//     console.log(typeof secondNumber);
//     console.log(differenceNumber);
//     console.log(typeof differenceNumber);
// }