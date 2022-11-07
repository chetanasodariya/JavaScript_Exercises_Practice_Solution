// <................... w3resource ...................>

function check_char(str1, char) {
    ctr = 0;
    for (let i = 0; i < str1.length; i++) {
        if ((str1.charAt(i) == char) && (i >= 1 && i <= 3)) {
            ctr = 1;
            break;
        }
    }
    if (ctr == 1) return true;
    return false;
}
console.log(check_char("Python", "y"));
console.log(check_char("JavaScript", "a"));
console.log(check_char("Console", "o"));
console.log(check_char("Console", "C"));
console.log(check_char("Console", "e"));
console.log(check_char("JavaScript", "S"));


// <................... My coding ...................>

// function check() {
//     let string = document.getElementById("string").value;
//     let character = document.getElementById("character").value;

//     let checkCharacter = string.slice(2, 5);

//     if(character === checkCharacter){
//         document.getElementById("outputComputer").innerHTML = "Specified character exists within the 2nd to 4th position in a given string.";
//     }else{
//         document.getElementById("outputComputer").innerHTML = "Specified character NOT exists within the 2nd to 4th position in a given string.";
//     }

//     document.getElementById("userEnterString").innerHTML = "User enter string is " + string + ".";
//     document.getElementById("userEnterCharacter").innerHTML = "User enter character is " + character + ".";


//     console.log(string);
//     console.log(typeof string);
//     console.log(character);
//     console.log(typeof character);
//     console.log(checkCharacter);
//     console.log(typeof checkCharacter);
// }