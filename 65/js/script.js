// <................... w3resource ...................>

function end_script(str) {
    if (str.substring(str.length - 6, str.length) == 'Script') {
        return true;
    } else {
        return false;
    }
}

console.log(end_script("JavaScript"));
console.log(end_script("Java Script"));
console.log(end_script("Java Scripts"));

// <................... My coding ...................>

function check() {
    let string = document.getElementById("string").value;

    let lastString = string.slice(-6, string.length);

    if (string.length >= 6 && (lastString === "script" || lastString === "Script" || lastString === "SCRIPT")) {
        document.getElementById("output").innerHTML = 'User enter string end with "Script".';
    } else {
        document.getElementById("output").innerHTML = 'User enter string is NOT end with "Script".';
    }

    document.getElementById("outputUser").innerHTML = "User enter string is " + string + ".";

    console.log(string);
    console.log(typeof string);
    console.log(lastString);
    console.log(typeof lastString);
}