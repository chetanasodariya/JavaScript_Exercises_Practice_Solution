// <................... w3resource ...................>

function two_string(str, n) {
    first_part = str.substring(0, n);
    last_part = str.substring(str.length - n);
    return first_part + last_part;
}

console.log(two_string("JavaScript", 2));
console.log(two_string("JavaScript", 3));

// <................... My coding ...................>

function check() {
    let string = document.getElementById("string").value;
    let number = document.getElementById("number").value;

    number = parseInt(number);

    let firstString = string.slice(0, number);
    let lastString = string.slice(-number, string.length);

    let newString = firstString + lastString;

    if (string.length >= number) {
        document.getElementById("outputNew").innerHTML = "New string is " + newString + ".";
    } else {
        document.getElementById("outputNew").innerHTML = "User enter string length is less then " + number + ".";
    }

    document.getElementById("outputUserString").innerHTML = "User enter string is " + string + ".";
    document.getElementById("outputUserNumber").innerHTML = "User enter number is " + number + ".";

    console.log(string);
    console.log(typeof string);
    console.log(number);
    console.log(typeof number);
    console.log(firstString);
    console.log(typeof firstString);
    console.log(lastString);
    console.log(typeof lastString);
}