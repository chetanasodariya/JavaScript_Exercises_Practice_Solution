// <................... w3resource ...................>

function right_three(str) {
    if (str.length > 1) {
        return str.slice(-3) + str.slice(0, -3);
    }
    return str;
}
console.log(right_three("Python"));
console.log(right_three("JavaScript"));
console.log(right_three("Hi"));

// <................... My coding ...................>

function check() {
    let string = document.getElementById("string").value;
    if(string.length > 2){
        let lastString = string.slice(-3, string.length);
        let startString = string.slice(0, string.length - 3);
        let outputString = lastString.concat(startString);
        document.getElementById("output").innerHTML = "New string is " + outputString + ".";
    }else{
        document.getElementById("output").innerHTML = "User enter string is equal or less then 2.";
    }
    document.getElementById("outputUser").innerHTML = "User enter string is " + string + ".";
}