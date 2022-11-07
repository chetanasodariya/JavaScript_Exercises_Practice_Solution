// <................... w3resource ...................>

function max_of_three(x, y, z) 
 {
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
}

console.log(max_of_three(1,0,1));
console.log(max_of_three(0,-10,-20));
console.log(max_of_three(1000,510,440));


// <................... My coding ...................>

// function largest() {
//     let firstNumber = document.getElementById("firstNumber").value;
//     let secondNumber = document.getElementById("secondNumber").value;
//     let thirdNumber = document.getElementById("thirdNumber").value;
    
//     firstNumber = parseInt(firstNumber);
//     secondNumber = parseInt(secondNumber);
//     thirdNumber = parseInt(thirdNumber);

//     if((firstNumber > secondNumber) && (firstNumber > thirdNumber)){
//         document.getElementById("outputComputer").innerHTML ="First number is Greater then second or third number.";
//     }else if((secondNumber > firstNumber) && (secondNumber > thirdNumber)){
//         document.getElementById("outputComputer").innerHTML ="Second number is Greater then first or third number.";
//     }else if((thirdNumber > firstNumber) && (thirdNumber > secondNumber)){
//         document.getElementById("outputComputer").innerHTML ="Third number is Greater then first or second number.";
//     }else{
//         document.getElementById("outputComputer").innerHTML ="User NOT enter number.";
//     }

//     document.getElementById("outputUser").innerHTML = "User entre number is " + firstNumber + ", " + secondNumber + ", " + thirdNumber + ".";

//     console.log(firstNumber);
//     console.log(typeof firstNumber);
//     console.log(secondNumber);
//     console.log(typeof secondNumber);
//     console.log(thirdNumber);
//     console.log(typeof thirdNumber);
// }