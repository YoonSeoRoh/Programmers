// function solution(num) {
//   let answer = "";
//   if (num % 2 === 0) {
//     return (answer = "Even");
//   } else if (num % 2 !== 0) {
//     return (answer = "Odd");
//   }
// }

// console.log(solution(3));
// console.log(solution(4));

// function solution(num) {
//   let answer = "";
//   return num % 2 === 0 ? (answer = "Even") : (answer = "Odd");
// }

// console.log(solution(3));
// console.log(solution(4));

function solution(num) {
  return num % 2 ? "Odd" : "Even";
}

console.log(solution(3));
console.log(solution(4));
