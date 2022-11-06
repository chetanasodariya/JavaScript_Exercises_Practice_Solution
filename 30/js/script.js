document.getElementById("btn").addEventListener("click", function() {

    let string = document.getElementById("string").value;

    let twoSlice = string.slice(4, 10);

    if(twoSlice === "script" || twoSlice === "SCRIPT" || twoSlice === "Script"){
        let newString = string.slice(0, 4) + string.slice(10, string.length);
        document.getElementById("output").innerHTML = "User enter string is include script. " + "New string is " + newString + ".";
    }else{
        document.getElementById("output").innerHTML = "User enter string is NOT include script.";
    }

});