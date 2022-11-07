// <................... w3resource ...................>

// Get a random integer from 1 to 10 inclusive
const num = Math.ceil(Math.random() * 10);
console.log(num);
const gnum = prompt('Guess the number between 1 and 10 inclusive');
if (gnum == num)
    console.log('Matched');
else
    console.log('Not matched, the number was ' + gnum);


// <................... My coding ...................>

// function randomNumber(){
//     let computer = Math.floor(Math.random() * 10) + 1;
//     let user = document.getElementById("inputRandomNumber").value;
//     user = parseInt(user);

//     let computerNumber = document.getElementById("computerNumber");
//     let userNumber = document.getElementById("userNumber");

//     computerNumber.innerHTML = computer;
//     userNumber.innerHTML = user;

//     if(user === computer){
//         document.getElementById("matched").innerHTML = "Matched";
//     }else if(user === 0){
//         document.getElementById("matched").innerHTML = "not between 1 to 10";
//     }else if(user >= 11){
//         document.getElementById("matched").innerHTML = "not between 1 to 10";
//     }else{
//         document.getElementById("matched").innerHTML = "Not Matched";
//     }
// }