document.getElementById("btn").addEventListener("click", function() {

    let string = document.getElementById("string").value;

    let twoSlice = string.slice(0, 2);

    if(twoSlice === "Py" || twoSlice === "PY"){
        document.getElementById("output").innerHTML = string.substr(2);
    }else{
        let addPy = "Py";
        document.getElementById("output").innerHTML = addPy.concat(string);
    }

    document.getElementById("output1").innerHTML = string;

    console.log(string);    
    console.log(typeof string);    
    console.log(twoSlice);    
    console.log(typeof twoSlice);    
});