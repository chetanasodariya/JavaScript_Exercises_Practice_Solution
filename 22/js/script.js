function newString() {
    let string = document.getElementById("string").value;
    let number = document.getElementById("number").value;
    number = parseInt(number);

    let str = string.substr(number);

    document.getElementById("outputString").innerHTML = str;
    document.getElementById("outputUserString").innerHTML = string;
    document.getElementById("outputUserPosition").innerHTML = number; 


    console.log(string);
    console.log(typeof string);
    console.log(number);
    console.log(typeof number);
    console.log(str);
    console.log(typeof str);
}