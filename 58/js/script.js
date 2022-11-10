// <................... w3resource ...................>

function newstring(str) {
    if (str.length >= 3) {
        result_str = str.substring(str.length - 3);
        return result_str + result_str + result_str + result_str;
    }
    else
        return false;
}
console.log(newstring("Python 3.0"));
console.log(newstring("JS"));
console.log(newstring("JavaScript"));

// <................... My coding ...................>

function check() {
    let string = document.getElementById("string").value;
    let number = 4;
    let newString = string.substring(string.length - 3);
    let newOutput = newString.repeat(number);

    if (string.length < 3) {
        document.getElementById("output").innerHTML = "User enter string is less then 3.";
    } else {
        document.getElementById("output").innerHTML = "New string is " + newOutput + ".";
    }

    document.getElementById("outputUserString").innerHTML = "User enter string is " + string + ".";

    console.log(string);
    console.log(typeof string);
    console.log(number);
    console.log(typeof number);
    console.log(newString);
    console.log(typeof newString);
    console.log(newOutput);
    console.log(typeof newOutput);
}