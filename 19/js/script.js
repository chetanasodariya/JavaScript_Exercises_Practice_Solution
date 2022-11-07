// <................... w3resource ...................>

function testhundred(x) {
    return ((Math.abs(100 - x) <= 20) ||
        (Math.abs(400 - x) <= 20));
}

console.log(testhundred(10));
console.log(testhundred(90));
console.log(testhundred(99));
console.log(testhundred(199));
console.log(testhundred(200));


// <................... My coding ...................>

// function check() {
//     let number = document.getElementById("number").value;
//     number = parseInt(number);

//     if((Math.abs(100 - number) <= 20) || (Math.abs(400 - number) <= 20)){
//         document.getElementById("result").innerHTML = "The number is Less then 20.";
//     }else if(!number){
//         document.getElementById("result").innerHTML = "Enter the number.";
//     }else{
//         document.getElementById("result").innerHTML = "The number is Greater then 20.";
//     }

//     console.log(number);
//     console.log(typeof number);
// }

// function check() {
//     let number = document.getElementById("number").value;
//     number = parseInt(number);

//     if(number >= 20){
//         if(number === 100){
//             document.getElementById("result").innerHTML = "The number is Equal to 100.";
//         }else if(number < 100){
//             document.getElementById("result").innerHTML = "The number is Less then 100.";
//         }else if(number === 400){
//             document.getElementById("result").innerHTML = "The number is Equal to 400.";
//         }else if(number < 400){
//             document.getElementById("result").innerHTML = "The number is Less then 400.";
//         }else{
//             document.getElementById("result").innerHTML = "The number is Greater then 400.";
//         }
//     }else if(!number){
//         document.getElementById("result").innerHTML = "Enter the number."
//     }else{
//         document.getElementById("result").innerHTML = "The number is Less then 20."
//     }


//     console.log(number);
//     console.log(typeof number);
// }