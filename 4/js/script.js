// <................... w3resource ...................>

var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);


// <................... My coding ...................>

// function area(){

//     let a = document.getElementById("inputA").value;
//     let b = document.getElementById("inputB").value;
//     let c = document.getElementById("inputC").value;

//     let aArea = parseInt(a);
//     let bArea = parseInt(b);
//     let cArea = parseInt(c);

//     let height = (aArea + bArea + cArea)/2;

//     let areaOfTriangle = Math.sqrt(height * ((height - aArea) * (height - bArea) * (height - cArea)));

//     console.log(height);

//     console.log(areaOfTriangle);

//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(typeof a);
//     console.log(typeof b);
//     console.log(typeof c);
//     console.log(typeof aArea);
//     console.log(typeof bArea);
//     console.log(typeof cArea);

//     document.getElementById("input1").innerHTML = a;
//     document.getElementById("input2").innerHTML = b;
//     document.getElementById("input3").innerHTML = c;

//     document.getElementById("heightOfTriangle").innerHTML = height;
//     document.getElementById("outputOfAreaOfTriangle").innerHTML = areaOfTriangle;
// }