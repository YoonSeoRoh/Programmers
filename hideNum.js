//내 코드
// function solution(phone_number) {
//   var answer = "";
//   console.log(phone_number.split(""));
//   answer = phone_number
//     .split("")
//     .map((curr, index) => {
//       if (index < phone_number.length - 4) {
//         return "*";
//       } else {
//         return curr;
//       }
//     })
//     .join("");
//   return answer;
// }

//더 간결한 코드
function solution(phone_number) {
  var answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
  return answer;
}

console.log(solution("01033334444"));
console.log(solution("027778888"));
