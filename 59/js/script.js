// <................... w3resource ...................>

function first_half(str) {
    if (str.length % 2 == 0) {
        return str.slice(0, str.length / 2);
    }
    return str;
}
console.log(first_half("Python"));
console.log(first_half("JavaScript"));
console.log(first_half("PHP"));

// <................... My coding ...................>

function check() {
    let string = document.getElementById("string").value;

    // let x;

    if (string.length % 2 == 0) {
        let x = (string.length / 2);
        let string2 = string.substring(0, x);
        document.getElementById("output").innerHTML = "New string is " + string2 + ".";
    } else {
        let x = string;
        document.getElementById("output").innerHTML = "New string is " + x + ".";
    }

    document.getElementById("outputString").innerHTML = "User enter string is " + string + ".";

    console.log(string);
    console.log(typeof string);
}