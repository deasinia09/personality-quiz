var cityScore = 0;
var suburbScore = 0;

var questionCount = 0;

var result = document.getElementById("result");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");



function city () {
  cityScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + "cityScore = " + cityScore);

  if(questionCount == 5) {
  console.log("The quiz is done!")
    if (cityScore >= 3){
      result.innerHTML = "You're a city person!";
      console.log("You're a city person!");
    } else if (suburbScore>= 3){
      console.log("You're a suburbs person!");
      result.innerHTML = "You're a suburbs person!";
    }
}
}

function suburb () {
  suburbScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + "suburbScore = " + suburbScore);

  if(questionCount == 5) {
  console.log("The quiz is done!")
    if (cityScore >= 3){
      console.log("You're a city person!");
      result.innerHTML = "You're a city person!";
    } else if (suburbScore>= 3){
      console.log("You're a suburbs person!");
      result.innerHTML = "You're a suburbs person!";
    }
}

}

q1a1.addEventListener("click",city);
q1a2.addEventListener("click",city);
q1a3.addEventListener("click",suburb);
q1a4.addEventListener("click",suburb);

q2a1.addEventListener("click",city);
q2a2.addEventListener("click",suburb);
q2a3.addEventListener("click",city);
q2a4.addEventListener("click",suburb);

q3a1.addEventListener("click",city);
q3a2.addEventListener("click",city);
q3a3.addEventListener("click",suburb);
q3a4.addEventListener("click",suburb);

q4a1.addEventListener("click",city);
q4a2.addEventListener("click",city);
q4a3.addEventListener("click",suburb);
q4a4.addEventListener("click",suburb);

q5a1.addEventListener("click",city);
q5a2.addEventListener("click",suburb);
