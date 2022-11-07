// <................... w3resource ...................>

function front_back(str) {
    first = str.substring(0, 1);
    return first + str + first;
}
console.log(front_back('a'));
console.log(front_back('ab'));
console.log(front_back('abc'));



// <................... My coding ...................>

// function newString() {
//     let string = document.getElementById("string").value;

//     let first = string.charAt(0);

//     let newStringCrate = first + string + first;

//     document.getElementById("outputUserString").innerHTML = string;
//     document.getElementById("outputNewString").innerHTML = newStringCrate;

//     console.log(string);
//     console.log(typeof string);
//     console.log(first);
//     console.log(typeof first);
//     console.log(newStringCrate);
//     console.log(typeof newStringCrate);
// }