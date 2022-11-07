// <................... w3resource ...................>

var var_name = 'abcd';
var n = 120;
this[var_name] = n;
console.log(this[var_name])


// <................... My coding ...................>

// function createVariable() {
//     let variableName = document.getElementById("variableName").value;
//     let variableValue = document.getElementById("variableValue").value;

//     variableValue = parseInt(variableValue);

//     let variable = {
//         [variableName] : variableValue
//     }

//     console.log(variable);
//     console.log(typeof variable);
//     console.log(variableName);
//     console.log(typeof variableName);
//     console.log(variableValue);
//     console.log(typeof variableValue);

//     document.getElementById("name").innerHTML = variableName;
//     document.getElementById("value").innerHTML = variableValue;
// }