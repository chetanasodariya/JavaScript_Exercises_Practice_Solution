// <................... w3resource ...................>

function near_100(x, y) {
    if (x != y) {
        x1 = Math.abs(x - 100);
        y1 = Math.abs(y - 100);

        if (x1 < y1) {
            return x;
        }
        if (y1 < x1) {
            return y;
        }
        return 0;
    }
    else
        return false;
}

console.log(near_100(90, 89));
console.log(near_100(-90, -89));
console.log(near_100(90, 90));


// <................... My coding ...................>

// function nearest() {
//     let firstNumber = document.getElementById("firstNumber").value;
//     let secondNumber = document.getElementById("secondNumber").value;

//     firstNumber = parseInt(firstNumber);
//     secondNumber = parseInt(secondNumber);


//     if (firstNumber !== secondNumber) {
//         let first = Math.abs(firstNumber - 100);
//         let second = Math.abs(secondNumber - 100);
//         if (first < second) {
//             document.getElementById("outputComputer").innerHTML = "first";
//         } else if (second < first) {
//             document.getElementById("outputComputer").innerHTML = "second";
//         }
//         return 0;
//     }else{
//         document.getElementById("outputComputer").innerHTML = "equal";
//     }


//     console.log(firstNumber);
//     console.log(typeof firstNumber);
//     console.log(secondNumber);
//     console.log(typeof secondNumber);
// }