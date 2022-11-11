// <................... w3resource ...................>

function all_max(nums) {
    var max_val = nums[0] > nums[2] ? nums[0] : nums[2];

    nums[0] = max_val;
    nums[1] = max_val;
    nums[2] = max_val;

    return nums;
}
console.log(all_max([20, 30, 40]));
console.log(all_max([-7, -9, 0]));
console.log(all_max([12, 10, 3]));

// <................... My coding ...................>

function check() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let thirdNumber = document.getElementById("thirdNumber").value;

    let newArray = [];

    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    thirdNumber = parseInt(thirdNumber);
    
    if(firstNumber > thirdNumber){
        let output = newArray.push(firstNumber, firstNumber, firstNumber);
        document.getElementById("output").innerHTML = newArray;
    }else{
        let output = newArray.push(thirdNumber, thirdNumber, thirdNumber);
        document.getElementById("output").innerHTML = newArray;
    }

    console.log(firstNumber);
    console.log(typeof firstNumber);
    console.log(secondNumber);
    console.log(typeof secondNumber);
    console.log(thirdNumber);
    console.log(typeof thirdNumber);
    console.log(newArray);
}