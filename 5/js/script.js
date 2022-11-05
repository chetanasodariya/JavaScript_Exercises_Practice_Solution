// let a = 'w3resource';

// const myString = 'w3resource';
// const stringLength = myString.length; // this will be 16
// console.log('lastChar: ', myString.charAt(stringLength - 1)); // this will be the string
// let last = myString.charAt(stringLength - 1);
// let remove = myString.slice(0, -1);
// console.log(remove);

// let start = myString.charAt(myString.length-1);

// console.log(start);

// console.log(remove.padStart(remove.length+1, start));


function output(){
    let string = document.getElementById("inputString").value;
    let stringLength = string.length;
    let last = string.charAt(stringLength - 1);
    let remove = string.slice(0, -1);
    let outputOfString = remove.padStart(remove.length +1, last);
    document.getElementById("output").innerHTML = outputOfString;
}