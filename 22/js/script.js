// <................... w3resource ...................>

function remove_character(str, char_pos) {
    part1 = str.substring(0, char_pos);
    part2 = str.substring(char_pos + 1, str.length);
    return (part1 + part2);
}

console.log(remove_character("Python", 0));
console.log(remove_character("Python", 3));
console.log(remove_character("Python", 5));


// <................... My coding ...................>

// function newString() {
//     let string = document.getElementById("string").value;
//     let number = document.getElementById("number").value;
//     number = parseInt(number);

//     let str = string.substr(number);

//     document.getElementById("outputString").innerHTML = str;
//     document.getElementById("outputUserString").innerHTML = string;
//     document.getElementById("outputUserPosition").innerHTML = number;


//     console.log(string);
//     console.log(typeof string);
//     console.log(number);
//     console.log(typeof number);
//     console.log(str);
//     console.log(typeof str);
// }