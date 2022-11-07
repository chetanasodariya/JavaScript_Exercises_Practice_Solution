// <................... w3resource ...................>

function last_digit(x, y, z)
{
  if ((x > 0) && y > 0 && z > 0)
    {
     return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
   }
  else
    return false;
}

console.log(last_digit(20, 30, 400));
console.log(last_digit(-20, 30, 400));
console.log(last_digit(20, -30, 400));
console.log(last_digit(20, 30, -400));


// <................... My coding ...................>

// function check() {
//     let first = document.getElementById("first").value;
//     let second = document.getElementById("second").value;
//     let third = document.getElementById("third").value;

//     first = parseInt(first);
//     second = parseInt(second);
//     third = parseInt(third);
    
//     let firstNumber = first > 0;
//     let secondNumber = second > 0;
//     let thirdNumber = third > 0;

//     let firstLast = firstNumber % 10;
//     let secondLast = secondNumber % 10;
//     let thirdLast = thirdNumber % 10;

//     if (firstLast === secondLast && firstLast === thirdLast && thirdLast === secondLast){
//         document.getElementById("output").innerHTML = "Last digit of the three given positive integers are same.";
//     }else{
//         document.getElementById("output").innerHTML = "Last digit of the three given positive integers are NOT same.";
//     }

//     document.getElementById("userEnterFirst").innerHTML = "User enter first number is " + first;
//     document.getElementById("userEnterSecond").innerHTML = "User enter second number is " + second;
//     document.getElementById("userEnterThird").innerHTML = "User enter third number is " + third;

//     console.log(first);
//     console.log(typeof first);
//     console.log(second);
//     console.log(typeof second);
//     console.log(third);
//     console.log(typeof third);
//     console.log(firstNumber);
//     console.log(typeof firstNumber);
//     console.log(secondNumber);
//     console.log(typeof secondNumber);
//     console.log(thirdNumber);
//     console.log(typeof thirdNumber);
// }