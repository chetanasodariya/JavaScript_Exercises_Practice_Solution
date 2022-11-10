// <................... w3resource ...................>

function concatenate(str1, str2) {
    str1 = str1.substring(1, str1.length);
    str2 = str2.substring(1, str2.length);
    return str1 + str2;
}

console.log(concatenate("PHP", "JS"));
console.log(concatenate("A", "B"));
console.log(concatenate("AA", "BB"));


// <................... My coding ...................>

function check() {
    let firstString = document.getElementById("firstString").value;
    let secondString = document.getElementById("secondString").value;

    let newFirstString = firstString.substring(1, firstString.length);
    let newSecondString = secondString.substring(1, secondString.length);


    let newOutput = newFirstString.concat(newSecondString);

    document.getElementById("outputFirstUser").innerHTML = "User enter first string is " + firstString + ".";
    document.getElementById("outputSecondUser").innerHTML = "User enter second string is " + secondString + ".";
    document.getElementById("output").innerHTML = "New string is " + newOutput + ".";
}