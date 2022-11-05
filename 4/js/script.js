// let a = document.getElementById("inputA").value;
// let b = document.getElementById("inputB").value;
// let c = document.getElementById("inputC").value;

// let height = a + b + c;

// let areaOfTriangle = (height * b)/2;

// console.log(a);
// console.log(b);
// console.log(c);

// function area(){

//     let a = document.getElementById("inputA").value;
//     let b = document.getElementById("inputB").value;
//     let c = document.getElementById("inputC").value;
//     let height = a + b + c;
//     let areaOfTriangle = (height * b)/2;
// }

function area(){

    let a = document.getElementById("inputA").value;
    let b = document.getElementById("inputB").value;
    let c = document.getElementById("inputC").value;

    let aArea = parseInt(a);
    let bArea = parseInt(b);
    let cArea = parseInt(c);

    let height = aArea + bArea + cArea;

    let areaOfTriangle = (height * bArea)/2;

    console.log(height);

    console.log(areaOfTriangle);

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    console.log(typeof aArea);
    console.log(typeof bArea);
    console.log(typeof cArea);

    document.getElementById("input1").innerHTML = a;
    document.getElementById("input2").innerHTML = b;
    document.getElementById("input3").innerHTML = c;

    document.getElementById("heightOfTriangle").innerHTML = height;
    document.getElementById("outputOfAreaOfTriangle").innerHTML = areaOfTriangle;
}



// area();