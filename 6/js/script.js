function leapYear(){
    let inputYear = document.getElementById("inputYear").value;

    if(inputYear % 400 == 0){
        document.getElementById("output").innerHTML = "leap Year";
    }else if(inputYear % 100 == 0){
        document.getElementById("output").innerHTML = "leap Year";
    }else if(inputYear % 4 == 0){
        document.getElementById("output").innerHTML = "leap Year";
    }else{
        document.getElementById("output").innerHTML = "not leap Year";
    }
    
}