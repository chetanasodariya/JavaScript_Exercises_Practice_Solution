// <................... w3resource ...................>

function equal_pt(str) {
    var str_p = str.replace(/[^p]/g, "");

    var str_t = str.replace(/[^t]/g, "");

    var p_num = str_p.length;
    var s_num = str_t.length;

    return p_num === s_num;

}
console.log(equal_pt("paatpss"));
console.log(equal_pt("paatps"));


// <................... My coding ...................>

function check() {
    let string = document.getElementById("string").value;

    let p = 0;
    let t = 0;

    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) == "p") {
            p += 1;
        }
    }

    for (let j = 0; j < string.length; j++) {
        if (string.charAt(j) == "t") {
            t += 1;
        }
    }

    if (p == t) {
        document.getElementById("output").innerHTML = "User enter string contains equal number of p and t.";
    } else {
        document.getElementById("output").innerHTML = "User enter string does NOT contains equal number of p and t.";
    }

    console.log(string);
    console.log(typeof string);
}