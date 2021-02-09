// $(function(){
//     $(".carousel").carousel( { interval: 2000} );
//     $("#carouselButton").click(function(){
//         if($("#carouselButton").children("i").hasClass("fa-pause")){
//             $(".carousel").carousel("pause");
//             $("#carouselButton").children("i").removeClass("fa-pause");
//             $("#carouselButton").children("i").addClass("fa-play");
//         } else {
//             $(".carousel").carousel("cycle");
//             $("#carouselButton").children("i").removeClass("fa-play");
//             $("#carouselButton").children("i").addClass("fa-pause");
//         }
//     });

//     $("#reserveButton").click(function(){
//         $("#reserveModal").modal();
//     })

//     $("#loginButton").click(function(){
//         $("#loginModal").modal();
//     })
// });

/****************************** Challenge 1 ******************************/
const getInitials = (firstName, lastName) => firstName[0] + lastName[0];
console.log(getInitials("Charlie", "Brown")); // this should console.log "CB"


/****************************** Challenge 2 ******************************/
function getStudentGrade(finalExamPoints, assignmentsPoints) {
  const percent = ((finalExamPoints + assignmentsPoints) / 300) * 100; 
  let grade = "Unknown";
  if (percent >= 90) {
    grade = "A";
  }
  else if (percent >= 80) {
    grade =  "B";
  } 
  else if (percent >= 70) {
    grade =  "C";
  } 
  else if (percent >= 60) {
    grade =  "D";
  } 
  else {
    grade =  "F";
  }
  return grade;
}
console.log(getStudentGrade(70, 180)); // this should console.log "B"


/****************************** Challenge 3 ******************************/
function digitToWord(digit) {
  switch (digit) {
    case 0: 
        return "zero";
        break;
    case 1: 
        return "one";
        break;
    case 2: 
        return "two";
        break;
    case 3: 
        return "three";
        break;
    case 4: 
        return "four";
        break;
    case 5: 
        return "five";
        break;
    case 6: 
        return "six";
        break;
    case 7: 
        return "seven";
        break;
    case 8: 
        return "eight";
        break;
    case 9: 
        return "nine";
        break;
    default: 
        return "unknown";
  }
}
const word = digitToWord(5);
console.log("5 is " + word); // This should console.log "5 is five"


/****************************** Challenge 4 ******************************/
function hasTreat(treat) {
  const treatsArr = ['cookie', 'cake', 'muffin', 'pie', 'ice cream'];
  if (treatsArr.indexOf('cookie') >= 0) {
    return true;
  } else { 
    return false;
  }
}

if (hasTreat('cookie')) { // You should have a cookie. 
  console.log("You have a cookie!");
} else {
  console.log("You have no cookie foo."); // This is wrong. You should have a cookie. 
}


/****************************** Challenge 5 ******************************/
const randomValue = (min, max) => { 
  min = Math.ceil(min);
  max = Math.floor(max);
  
  return Math.floor(Math.random() * (max-min) +min)
};
console.log(randomValue(2,6)) // should return a random numeric value between 2 and 6. 
// For an explanation of Math.random, see: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_number_between_two_values