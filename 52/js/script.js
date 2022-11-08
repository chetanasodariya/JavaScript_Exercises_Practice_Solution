// <................... w3resource ...................>

function alphabet_Soup(str) {

    return str.split("").sort().join("");

}

console.log(alphabet_Soup("Python"));

console.log(alphabet_Soup("Exercises"));

// <................... My coding ...................>

// function check() {
//     let string = document.getElementById("string").value;

//     let newString = string.split("");

//     let res = newString.sort().join("");

//     document.getElementById("outputUser").innerHTML = "User enter string is " + string;
//     document.getElementById("output").innerHTML = "New string is " + res;

//     console.log(string);
//     console.log(newString);
//     console.log(res);
// }