// <................... w3resource ...................>

function middle_three(str) {
    if (str.length % 2 != 0) {

        mid = (str.length + 1) / 2;
        return str.slice(mid - 2, mid + 1);
    }
    return str;
}
console.log(middle_three('abcdefg'));
console.log(middle_three('HTML5'));
console.log(middle_three('Python'));
console.log(middle_three('PHP'));
console.log(middle_three('Exercises'));

// <................... My coding ...................>

function check() {
    let string = document.getElementById("string").value;

    let position;
    let output;

    if(string.length % 2 == 1) {
        position = string.length / 2;
        output = string.slice(position - 1, position + 2);
        document.getElementById("output").innerHTML = output;
    } else{
        document.getElementById("output").innerHTML = string;
    }

    document.getElementById("outputUser").innerHTML = string;
}