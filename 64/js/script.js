// <................... w3resource ...................>

function str_con_cat(str1, str2) {
    const m = Math.min(str1.length, str2.length);
    return str1.substring(str1.length - m) + str2.substring(str2.length - m);
}

console.log(str_con_cat("Python", "JS"));
console.log(str_con_cat("ab", "cdef"));

// <................... My coding ...................>

function check() {
    let stringFirst = document.getElementById("stringFirst").value;
    let stringSecond = document.getElementById("stringSecond").value;

    let number = Math.min(stringFirst.length, stringSecond.length);

    let newString = stringFirst.substring(stringFirst.length - number) + stringSecond.substring(stringSecond.length - number);
    
    document.getElementById("outputString").innerHTML = "New string is " + newString + ".";
    document.getElementById("outputStringFirstUser").innerHTML = "User enter first string is " + stringFirst + ".";
    document.getElementById("outputStringSecondUser").innerHTML = "User enter second string is " + stringSecond + ".";

    console.log(stringFirst);
    console.log(typeof stringFirst);
    console.log(stringSecond);
    console.log(typeof stringSecond);
    console.log(number);
    console.log(typeof number);
    console.log(newString);
    console.log(typeof newString);
}