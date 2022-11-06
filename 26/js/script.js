function clickString() {
    let string = document.getElementById("string").value;

    if(string.length > 2){
        let first = string.charAt(2);
        let newCrateString = first + string + first;
        document.getElementById("outputString").innerHTML = "New string is " + newCrateString;
    }else{
        document.getElementById("outputString").innerHTML = "User enter string is less the 3 characters."
    }

    console.log(string);
    console.log(typeof string);
    console.log(first);
    console.log(typeof first);
    console.log(newCrateString);
    console.log(typeof newCrateString);
}