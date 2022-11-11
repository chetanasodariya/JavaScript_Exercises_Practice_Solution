// <................... w3resource ...................>

function nop(str) {
    let start_pos = 0;
    let end_pos = str.length;

    if (str.length > 0 && str.charAt(0) == 'P') {
        start_pos = 1;
    }

    if (str.length > 1 && str.charAt(str.length - 1) == 'P') {
        end_pos--;
    }

    return str.substring(start_pos, end_pos);
}

console.log(nop("PythonP"));
console.log(nop("Python"));
console.log(nop("JavaScript"));

// <................... My coding ...................>

function check() {
    let string = document.getElementById("string").value;

    let firstString = string.charAt(0);
    let lastString = string.charAt(string.length - 1);

    if ((firstString === "p" && lastString === "p") || (firstString === "P" && lastString === "P"))  {
        let newString = string.substring(1, string.length - 1);
        document.getElementById("output").innerHTML = "New string is " + newString + ".";
    } else if (lastString === "p" || lastString === "P") {
        let newString = string.substring(0, string.length - 1);
        document.getElementById("output").innerHTML = "New string is " + newString + ".";
    } else if (firstString === "p" || firstString === "P") {
        let newString = string.substring(1, string.length + 1);
        document.getElementById("output").innerHTML = "New string is " + newString + ".";
    } else {
        document.getElementById("output").innerHTML = "User enter string is " + string + ".";
    }

    console.log(string);
    console.log(typeof string);
    console.log(firstString);
    console.log(typeof firstString);
    console.log(lastString);
    console.log(typeof lastString);
}