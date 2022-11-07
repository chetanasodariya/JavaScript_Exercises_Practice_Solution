// <................... w3resource ...................>

function test37(x) {
    if (x % 3 == 0 || x % 7 == 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(test37(12));
console.log(test37(14));
console.log(test37(10));
console.log(test37(11));



// <................... My coding ...................>

// function positive() {
//     let number = document.getElementById("number").value;
//     number = parseInt(number);

//     if(number % 3 == 0){
//         document.getElementById("outputNumber").innerHTML = "Number is a multiple of 3";
//     }else if(number % 7 == 0){
//         document.getElementById("outputNumber").innerHTML = "Number is a multiple of 7";
//     }else{
//         document.getElementById("outputNumber").innerHTML = "This number is NOT multiple by 3 or 7"
//     }

//     console.log(number);
//     console.log(typeof number);
// }