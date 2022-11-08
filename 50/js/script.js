// <................... w3resource ...................>

function capital_letter(str) {
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."));


// <................... My coding ...................>

// function check() {
//     let words = document.getElementById("string").value;

//     var separateWord = words.toLowerCase().split(' ');
//     for (var i = 0; i < separateWord.length; i++) {
//         separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
//             separateWord[i].substring(1);
//     }
//     var a = separateWord.join(' ');
//     document.getElementById("output").innerHTML = a;
//     document.getElementById("outputUser").innerHTML = words;
// }