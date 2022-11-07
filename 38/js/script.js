// <................... w3resource ...................>

function exam_status(totmarks, is_exam) {
    if (is_exam) {
        return totmarks >= 90;
    }
    return (totmarks >= 89 && totmarks <= 100);
}

console.log(exam_status("78", " "));
console.log(exam_status("89", "true "));
console.log(exam_status("99", "true "));


// <................... My coding ...................>

// function check() {
//     let firstMarks = document.getElementById("firstMarks").value;
//     let secondMarks = document.getElementById("secondMarks").value;
//     let finalMarks = document.getElementById("finalMarks").value;

//     firstMarks = parseInt(firstMarks);
//     secondMarks = parseInt(secondMarks);
//     finalMarks = parseInt(finalMarks);

//     let sumOfExam = firstMarks + secondMarks;

//     if(sumOfExam >= 89 && sumOfExam <= 100){
//         document.getElementById("outputResult1").innerHTML = "Student grade is A+ in first and second exam.";
//     }else{
//         document.getElementById("outputResult1").innerHTML = "Student NOT gat A+ grade in first and second exam.";
//     }

//     if(finalMarks >= 90 && finalMarks <= 100){
//         document.getElementById("outputResult2").innerHTML = "Student grade is A+ in final exam.";
//     }else{
//         document.getElementById("outputResult2").innerHTML = "Student NOT gat A+ grade in final exam.";
//     }

//     document.getElementById("outputFirstExam").innerHTML = "User enter first exam marks is " + firstMarks;
//     document.getElementById("outputSecondExam").innerHTML = "User enter second exam marks is " + secondMarks;
//     document.getElementById("outputFinalExam").innerHTML = "User enter final exam marks is " + finalMarks;

//     console.log(firstMarks);
//     console.log(typeof firstMarks);
//     console.log(secondMarks);
//     console.log(typeof secondMarks);
//     console.log(finalMarks);
//     console.log(typeof finalMarks);
//     console.log(sumOfExam);
//     console.log(typeof sumOfExam);
// }