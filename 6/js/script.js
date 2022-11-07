// <................... w3resource ...................>

function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));


// <................... My coding ...................>


// function leapYear(){
//     let inputYear = document.getElementById("inputYear").value;

//     if(inputYear % 400 == 0){
//         document.getElementById("output").innerHTML = "leap Year";
//     }else if(inputYear % 100 == 0){
//         document.getElementById("output").innerHTML = "leap Year";
//     }else if(inputYear % 4 == 0){
//         document.getElementById("output").innerHTML = "leap Year";
//     }else{
//         document.getElementById("output").innerHTML = "not leap Year";
//     }
    
// }