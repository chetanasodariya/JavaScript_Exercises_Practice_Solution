// <................... w3resource ...................>

function first_last_same(nums) {
    var end = nums.length - 1;
    if (nums.length >= 1) {
        return nums[0] == nums[end];
    } else { return false; }
}

console.log(first_last_same([10, 20, 30]));
console.log(first_last_same([10, 20, 30, 10]));
console.log(first_last_same([20, 20, 20]));

// <................... My coding ...................>

function check(){
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let thirdNumber = document.getElementById("thirdNumber").value;
    
    let newArray = [];
    
    let outputArray = newArray.push(firstNumber, secondNumber, thirdNumber);

    if(firstNumber == thirdNumber){
        document.getElementById("output").innerHTML = true;
    }else{
        document.getElementById("output").innerHTML = false;
    }

    console.log(firstNumber);
    console.log(typeof firstNumber);
    console.log(secondNumber);
    console.log(typeof secondNumber);
    console.log(thirdNumber);
    console.log(typeof thirdNumber);
    console.log(newArray);
    console.log(typeof newArray);
    console.log(outputArray);
    console.log(typeof outputArray);
}