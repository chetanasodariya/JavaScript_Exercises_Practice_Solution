// <................... w3resource ...................>

function LetterChanges(text) {
    var s = text.split('');
    for (var i = 0; i < s.length; i++) {
        // Caesar cipher
        switch (s[i]) {
            case ' ':
                break;
            case 'z':
                s[i] = 'a';
                break;
            case 'Z':
                s[i] = 'A';
                break;
            default:
                s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
        }

        // Upper-case vowels
        switch (s[i]) {
            case 'a': case 'e': case 'i': case 'o': case 'u':
                s[i] = s[i].toUpperCase();
        }
    }
    return s.join('');
}
console.log(LetterChanges("PYTHON"));
console.log(LetterChanges("W3R"));
console.log(LetterChanges("php"));

// <................... My coding ...................>

// function check() {
//     let string = document.getElementById("string").value;
//     let a = string.split('');
//     for (let i = 0; i < a.length; i++) {
//         switch (a[i]) {
//             case ' ': break;
//             case 'z': a[i] = 'a'; break;
//             case 'Z': a[i] = 'A'; break;
//             default: a[i] = String.fromCharCode(1 + a[i].charCodeAt(0));
//         }

//         switch (a[i]) {
//             case 'a': case 'e': case 'i': case 'o': case 'u':
//                 a[i] = a[i].toUpperCase();
//         }
//     }
//     let newString = a.join('');

//     document.getElementById("output").innerHTML = "New string is " + newString + ".";
//     document.getElementById("outputUser").innerHTML = "User enter string is " + string + ".";
// }