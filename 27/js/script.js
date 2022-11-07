// <................... w3resource ...................>

function start_spec_str(str) {
    if (str.length < 4) {
        return false;
    }
    front = str.substring(0, 4);
    if (front == 'Java') {
        return true;
    }
    else {
        return false;
    }
}

console.log(start_spec_str("JavaScript"));
console.log(start_spec_str("Java"));
console.log(start_spec_str("Python"));



// <................... My coding ...................>

// document.getElementById("btn").addEventListener("click", function() {

//     let string = document.getElementById("string").value;

//     let twoSlice = string.slice(0, 4);

//     if(twoSlice === "java" || twoSlice === "JAVA" || twoSlice === "Java"){
//         document.getElementById("output").innerHTML = "User enter string is start with Java.";
//     }else{
//         document.getElementById("output").innerHTML = "User enter string is NOT include Java.";
//     }

//     document.getElementById("output1").innerHTML = string;

//     console.log(string);
//     console.log(typeof string);
//     console.log(twoSlice);
//     console.log(typeof twoSlice);
// });