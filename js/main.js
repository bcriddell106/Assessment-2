var numberOfExams = document.querySelector('#HowManyExams');
var examNumber1 = document.querySelector('#exam1');
var submitButton = document.querySelector('#UserExamNumber')
var exam = null;
var submitExamPercentageButton = document.querySelector(`#submitExamPercentage`);
var exam1Result = document.querySelector('#exam1')
var exam2Result = document.querySelector('#exam2')
var exam3Result = document.querySelector('#exam3')
var exam4Result = document.querySelector('#exam4')
var exam5Result = document.querySelector('#exam5')
var resultHTML = document.querySelector('#displayResult')
var averageValues = []

numberOfExams.addEventListener('input', function(event) {
  exam = numberOfExams.value;
  // submitExamPercentageButton = document.querySelector(`#submitExamPercentage${exam}`)
})

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  exam = numberOfExams.value;
  averageValues = []
if (exam >= 1) {
    exam1.classList.remove("hidden");
  } else {
    exam1.classList.add("hidden")
  }
    if (exam >= 2) {
      exam2.classList.remove("hidden");
    } else {
      exam2.classList.add("hidden")
    }
      if (exam >= 3) {
        exam3.classList.remove("hidden");
      } else {
        exam3.classList.add("hidden")
        }
        if (exam >= 4) {
          exam4.classList.remove("hidden");
          } else {
          exam4.classList.add("hidden")
          }
          if (exam >= 5) {
             exam5.classList.remove("hidden")
            } else {
              exam5.classList.add("hidden")
            }

          submitExamPercentageButton.classList.remove("hidden")

})


submitExamPercentageButton.addEventListener('click', function(event) {
  event.preventDefault();
if (exam == 1) {
  averageValues.push(Number(exam1Result.value));
              }
    if (exam == 2) {
      console.log("if 2");
      averageValues.push(Number(exam1Result.value))
      averageValues.push(Number(exam2Result.value));
                }
        if (exam == 3) {
          averageValues.push(Number(exam1Result.value), Number(exam2Result.value), Number(exam3Result.value));
                    }
          if (exam == 4) {
            averageValues.push(Number(exam1Result.value), Number(exam2Result.value), Number(exam3Result.value), Number(exam4Result.value));
                      }
            if (exam == 5) {
                averageValues.push(Number(exam1Result.value), Number(exam2Result.value), Number(exam3Result.value), Number(exam4Result.value), Number(exam5Result.value));
                        }
console.log(averageValues)
  var result = 0
  console.log(exam)
  for (var i = 0; i < exam; i++) {
    result = result + averageValues[i];
  }
  result = result / exam
  console.log(result)
resultHTML.innerHTML = "The average percentage of your exams are: " + result
})



// document.getElementById("submitExamPercentage").onclick = function() {calculateFunction()};
//
// function calculateFunction() {
//   var exam = numberOfExams.value - 1;
//   console.log(exam)
//   var average = averageValues.value;
//   var result = 0
//   for (var i = 0; i < exam; i++) {
//     result = result + average[i];
//   }
//   document.getElementById("demo").innerHTML = result;
// }

// submitExamPercentageButton.addEventListener('click', function(event)) {
//   event.preventDefault():
// var exam = numberOfExams.value - 1;
// var average = averageValues.value;
// var result = 0
// for (var i = 0; i < exam; i++) {
//   console.log("hello");
// }
// for (var i = 0; average.length > exam; i++) {
//   result = result + average[i]
// }
// document.getElementById("demo").innerHTML = result;
// })
