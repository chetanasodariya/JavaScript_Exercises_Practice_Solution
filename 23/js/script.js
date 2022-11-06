function newString() {
    let string = document.getElementById("string").value;

    let first = string.charAt(0);
    let last = string.charAt(string.length -1);

    let sliceString = string.slice(1, string.length -1);

    let newCrateString = last + sliceString + first;

    document.getElementById("outputUserString").innerHTML = string;
    document.getElementById("outputNewString").innerHTML = newCrateString;

    console.log(string);
    console.log(typeof string);
    console.log(first);
    console.log(typeof first);
    console.log(last);
    console.log(typeof last);
    console.log(sliceString);
    console.log(typeof sliceString);
    console.log(newCrateString);
    console.log(typeof newCrateString);
}