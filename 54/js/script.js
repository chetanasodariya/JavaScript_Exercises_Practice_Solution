// <................... w3resource ...................>

function vowel_Count(str) {

    return str.replace(/[^aeiou]/g, "").length;
}

console.log(vowel_Count("Python"));
console.log(vowel_Count("w3resource.com"));


// <................... My coding ...................>

function check() {
    let string = document.getElementById("string").value;

    let newString = string.split("");

    let count = 0;

    for (var i = 0; i <= string.length - 1; i++) {
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            count += 1;
        }
    }

    document.getElementById("output").innerHTML = "Count the number of vowels in a user enter string is " + count + ".";
    document.getElementById("outputUser").innerHTML = "User enter string is " + string + ".";

    console.log(string);
    console.log(typeof string);
    console.log(newString);
    console.log(typeof newString);
}