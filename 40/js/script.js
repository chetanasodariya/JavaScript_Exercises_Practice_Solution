// <................... w3resource ...................>

function check8(x, y) {
    if (x == 8 || y == 8) {
      return true;
    }
  
    if (x + y == 8 || Math.abs(x - y) == 8)
    {
      return true;
    }
  
    return false;
  }
  
  console.log(check8(7, 8));
  console.log(check8(16, 8));
  console.log(check8(24, 32));
  console.log(check8(17, 18));
  

// <................... My coding ...................>

// function check() {
//     let firstNumber = document.getElementById("firstNumber").value;
//     let secondNumber = document.getElementById("secondNumber").value;

//     firstNumber = parseInt(firstNumber);
//     secondNumber = parseInt(secondNumber);

//     if(firstNumber === 8 || secondNumber === 8){
//         document.getElementById("outputResult").innerHTML = "User enter number is equal to 8.";
//     }else if(firstNumber + secondNumber === 8){
//         document.getElementById("outputResult").innerHTML = "User enter sum of number is 8.";
//     }else if(Math.abs(firstNumber - secondNumber) === 8){
//         document.getElementById("outputResult").innerHTML = "User enter numbers difference is 8.";
//     }else{
//         document.getElementById("outputResult").innerHTML = "User enter numbers is NOT equal to 8 or their sum is NOT equal to 8 or their difference is NOT equal to 8.";
//     }

//     document.getElementById("outputFirstNumber").innerHTML = "User enter first number is " + firstNumber;
//     document.getElementById("outputSecondNumber").innerHTML = "User enter second number is " + secondNumber;
    
//     console.log(firstNumber);
//     console.log(typeof firstNumber);
//     console.log(secondNumber);
//     console.log(typeof secondNumber);
// }