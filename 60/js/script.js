// <................... w3resource ...................>

function without_first_end(str) {
    return str.substring(1, str.length - 1);
}
console.log(without_first_end('JavaScript'));
console.log(without_first_end('JS'));
console.log(without_first_end('PHP'));

// <................... My coding ...................>

function check() {
    let string = document.getElementById("string").value;
    let lengthString = string.length;

    if(lengthString <= 2){
        document.getElementById("output").innerHTML = "User enter string is equal or less then 2.";
    }else{
        let newString = string.slice(1, string.length - 1);
        document.getElementById("output").innerHTML = "New string is " + newString + ".";
    }

    document.getElementById("outputUser").innerHTML = "User enter string is " + string + ".";

    console.log(string);
    console.log(typeof string);
}