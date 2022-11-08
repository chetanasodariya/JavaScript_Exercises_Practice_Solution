// <................... w3resource ...................>

function test_digit(x, y, n) {
    if (n < 40 || n > 10000)
        return false;
    else
        if (n >= x && n <= y)
            return true;
        else
            return false;
}
console.log(test_digit(40, 4000, 45));
console.log(test_digit(80, 320, 79));
console.log(test_digit(89, 4000, 30));


// <................... My coding ...................>

// function check() {
//     let number = document.getElementById("number").value;
//     let starting = document.getElementById("starting").value;
//     let ending = document.getElementById("ending").value;

//     number = parseInt(number);
//     starting = parseInt(starting);
//     ending = parseInt(ending);

//     if(number < 40 || number > 10000){
//         document.getElementById("output").innerHTML = false;
//     }else if(number >= starting && number <= ending){
//         document.getElementById("output").innerHTML = true;
//     }else{
//         document.getElementById("output").innerHTML = false;
//     }

//     console.log(number);
//     console.log(typeof number);
//     console.log(starting);
//     console.log(typeof starting);
//     console.log(ending);
//     console.log(typeof ending);
// }