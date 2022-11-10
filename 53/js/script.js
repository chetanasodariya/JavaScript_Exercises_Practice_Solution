// <................... w3resource ...................>

function ab_Check(str) {
    return (/a...b/).test(str) || (/b...a/).test(str);
}

console.log(ab_Check("Chainsbreak"));
console.log(ab_Check("pane borrowed"));
console.log(ab_Check("abCheck"));


// <................... My coding ...................>

function check() {
    let string = document.getElementById("string").value;

    string = (/a...b/).test(string) || (/b...a/).test(string);

    document.getElementById("outputUser").innerHTML = "User entre string is " + string + ".";

    console.log(string);
    console.log(typeof string);
}