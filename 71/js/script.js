// <................... w3resource ...................>

function first_last_1(nums) {
    var end_pos = nums.length - 1;
    return nums[0] == 1 || nums[end_pos] == 1;
}

console.log(first_last_1([1, 3, 5]));
console.log(first_last_1([1, 3, 5, 1]));
console.log(first_last_1([2, 4, 6]));

// <................... My coding ...................>

function check(){
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let thirdNumber = document.getElementById("thirdNumber").value;
    
    let newArray = [];
    
    let outputArray = newArray.push(firstNumber, secondNumber, thirdNumber);

    if(firstNumber == 1 || thirdNumber == 1){
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