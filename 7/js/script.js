function outputYear(){

    let startYear = document.getElementById("startYear").value;
    let endYear = document.getElementById("endYear").value;

    let inputStartYear = document.getElementById("inputStartYear");
    let inputEndYear = document.getElementById("inputEndYear");

    inputStartYear.innerHTML = startYear;
    inputEndYear.innerHTML = endYear;

    for(startYear; startYear <= endYear; startYear++){
        var d = new Date(startYear, 0, 1);

        if(d.getDay() === 0){
            console.log("1st January is being a Sunday on " + startYear);
        }
    }
}