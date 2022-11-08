// <................... w3resource ...................>

function string_reverse(str) 
{
    return str.split("").reverse().join("");
}

console.log(string_reverse("w3resource"));
console.log(string_reverse("www"));
console.log(string_reverse("JavaScript"));

// <................... My coding ...................>

// function check() {
//     let string = document.getElementById("string").value;
//     let newString = "";

//     for(let i = string.length-1; i >= 0; i--){
//         newString += string[i];
//     }

//     document.getElementById("outputUser").innerHTML = "User entre string is " + string + ".";
//     document.getElementById("output").innerHTML = "reverse string is " + newString + ".";

//     console.log(string);
//     console.log(typeof string);
//     console.log(newString);
// }