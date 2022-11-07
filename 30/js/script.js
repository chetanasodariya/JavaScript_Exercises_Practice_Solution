// <................... w3resource ...................>

function check_script(str) {
    if (str.length < 6) {
        return str;
    }
    let result_str = str;

    if (str.substring(10, 4) == 'Script') {

        result_str = str.substring(0, 4) + str.substring(10, str.length);

    }
    return result_str;
}

console.log(check_script("JavaScript"));
console.log(check_script("CoffeeScript"));



// <................... My coding ...................>

// document.getElementById("btn").addEventListener("click", function() {

//     let string = document.getElementById("string").value;

//     let twoSlice = string.slice(4, 10);

//     if(twoSlice === "script" || twoSlice === "SCRIPT" || twoSlice === "Script"){
//         let newString = string.slice(0, 4) + string.slice(10, string.length);
//         document.getElementById("output").innerHTML = "User enter string is include script. " + "New string is " + newString + ".";
//     }else{
//         document.getElementById("output").innerHTML = "User enter string is NOT include script.";
//     }

// });