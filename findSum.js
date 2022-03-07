//내 코드
// function solution(a, b) {
//   var answer = 0;
//   var max = Math.max(a, b);
//   var min = Math.min(a, b);
//   for (i = min; i <= max; i++) {
//     answer += i;
//   }
//   return answer;
// }

//더 간결한 코드
function solution(a, b) {
  var answer = 0;
  var max = Math.max(a, b);
  var min = Math.min(a, b);
  for (i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(3, 5));
console.log(solution(1, 1));
console.log(solution(5, 3));
console.log(solution(-1, 1));
