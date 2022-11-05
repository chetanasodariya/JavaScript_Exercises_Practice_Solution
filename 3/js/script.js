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