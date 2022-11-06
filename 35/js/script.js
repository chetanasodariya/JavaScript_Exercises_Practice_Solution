function check() {
    let string = document.getElementById("string").value;
    let character = document.getElementById("character").value;

    let checkCharacter = string.slice(2, 5);

    if(character === checkCharacter){
        document.getElementById("outputComputer").innerHTML = "Specified character exists within the 2nd to 4th position in a given string.";
    }else{
        document.getElementById("outputComputer").innerHTML = "Specified character NOT exists within the 2nd to 4th position in a given string.";
    }

    document.getElementById("userEnterString").innerHTML = "User enter string is " + string + ".";
    document.getElementById("userEnterCharacter").innerHTML = "User enter character is " + character + ".";


    console.log(string);
    console.log(typeof string);
    console.log(character);
    console.log(typeof character);
    console.log(checkCharacter);
    console.log(typeof checkCharacter);
}