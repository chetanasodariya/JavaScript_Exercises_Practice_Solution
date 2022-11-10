// <................... w3resource ...................>

function string_copies(str, n) {
    if (n < 0)
        return false;
    else
        return str.repeat(n);
}
console.log(string_copies("abc", 5));
console.log(string_copies("abc", 0));
console.log(string_copies("abc", -2));

// <................... My coding ...................>

function check() {
    let string = document.getElementById("string").value;
    let number = document.getElementById("number").value;

    number = parseInt(number);

    if (number <= 0) {
        document.getElementById("output").innerHTML = "User enter number is equal or less then 0.";
    } else {
        let newString = string.repeat(number);
        document.getElementById("output").innerHTML = "New string is " + newString + ".";
    }

    document.getElementById("outputUserString").innerHTML = "User enter string is " + string + ".";
    document.getElementById("outputUserNumber").innerHTML = "User enter number is " + number + ".";

    console.log(string);
    console.log(typeof string);
    console.log(number);
    console.log(typeof number);
}