function check() {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let third = document.getElementById("third").value;
    let last = document.getElementById("last").value;

    // first = parseInt(first);
    // second = parseInt(second);
    // third = parseInt(third);
    // last = parseInt(last);
    



    document.getElementById("userEnterFirst").innerHTML = "User enter first number is " + first;
    document.getElementById("userEnterSecond").innerHTML = "User enter second number is " + second;
    document.getElementById("userEnterThird").innerHTML = "User enter third number is " + third;

    console.log(first);
    console.log(typeof first);
    console.log(second);
    console.log(typeof second);
    console.log(third);
    console.log(typeof third);
    console.log(last);
    console.log(typeof last);
}