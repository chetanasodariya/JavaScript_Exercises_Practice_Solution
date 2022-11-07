// <................... w3resource ...................>

function upper_lower(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    }
    front_part = (str.substring(0, 3)).toLowerCase();
    back_part = str.substring(3, str.length);
    return front_part + back_part;
}
console.log(upper_lower("Python"));
console.log(upper_lower("Py"));
console.log(upper_lower("JAVAScript"));


// <................... My coding ...................>

// function create() {
//     let string = document.getElementById("string").value;

//     let threeString = string.slice(0, 3);

//     if(string.length < 3){
//         let upString = string.toUpperCase();
//         document.getElementById("computerString").innerHTML = upString;
//     }else{
//         let loString = threeString.toLowerCase();
//         let newString = string.slice(3, string.length);
//         document.getElementById("computerString").innerHTML = loString + newString;
//     }

//     document.getElementById("userString").innerHTML = string;

//     console.log(string);
//     console.log(typeof string);
//     console.log(threeString);
//     console.log(typeof threeString);
// }