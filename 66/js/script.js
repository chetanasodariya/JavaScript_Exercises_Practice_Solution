// <................... w3resource ...................>

function city_name(str) {
    if (str.length >= 3 && ((str.substring(0, 3) == 'Los') || (str.substring(0, 3) == 'New'))) {
        return str;
    }
    return '';
}

console.log(city_name("New York"));
console.log(city_name("Los Angeles"));
console.log(city_name("London"));

// <................... My coding ...................>

function check() {
    let string = document.getElementById("string").value;

    let splitString = string.slice(0, 3);

    if (splitString === "Los" || splitString === "New") {
        document.getElementById("output").innerHTML = "User enter string is a name of city.";
    } else {
        document.getElementById("output").innerHTML = "User enter string is NOT a name of city.";
    }

    console.log(string);
    console.log(typeof string);
    console.log(splitString);
    console.log(typeof splitString);
}