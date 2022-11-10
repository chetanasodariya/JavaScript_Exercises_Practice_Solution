// <................... w3resource ...................>

today = new Date();
var cmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
  cmas.setFullYear(cmas.getFullYear() + 1);
}
var one_day = 1000 * 60 * 60 * 24;
console.log(Math.ceil((cmas.getTime() - today.getTime()) / (one_day)) + " days left until Christmas!");


// <................... My coding ...................>

// let today = new Date();

// let christmasYear = today.getFullYear();

// if (today.getMonth() == 11 && today.getDate() > 25) {
//   christmasYear = christmasYear + 1;
// }

// let christmasDate = new Date(christmasYear, 11, 25);

// let dayMilliseconds = 1000 * 60 * 60 * 24;

// let remainingDays = Math.ceil((christmasDate.getTime() - today.getTime()) / (dayMilliseconds));

// document.write("Output:- There are " + remainingDays + " days remaining until Christmas.");