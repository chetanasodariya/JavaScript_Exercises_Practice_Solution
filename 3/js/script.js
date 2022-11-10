// <................... w3resource ...................>

var today = new Date();
var dd = today.getDate();

var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}
today = mm + '-' + dd + '-' + yyyy;
console.log(today);
today = mm + '/' + dd + '/' + yyyy;
console.log(today);
today = dd + '-' + mm + '-' + yyyy;
console.log(today);
today = dd + '/' + mm + '/' + yyyy;
console.log(today);


// <................... My coding ...................>

let d = new Date();

let dDay = (d.getDate() > 9) ? d.getDate() : ('0' + d.getDate());

let mDay = (d.getMonth() > 8) ? (d.getMonth() + 1) : ('0' + (d.getMonth() + 1));

let yDay = d.getFullYear();

console.log(d);
console.log(dDay);
console.log(mDay);
console.log(yDay);

console.log(mDay + "-" + dDay + "-" + yDay + ", " + mDay + "/" + dDay + "/" + yDay);

console.log(dDay + "-" + mDay + "-" + yDay + ", " + dDay + "/" + mDay + "/" + yDay);

document.getElementById("formet1").innerHTML = mDay + "-" + dDay + "-" + yDay + ", " + mDay + "/" + dDay + "/" + yDay;

document.getElementById("formet2").innerHTML = dDay + "-" + mDay + "-" + yDay + ", " + dDay + "/" + mDay + "/" + yDay;