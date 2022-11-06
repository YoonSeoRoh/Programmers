// function solution(A, B) {
//   let answer = 0;
//   A.sort((a, b) => a - b);
//   B.sort((a, b) => b - a);
//   for (i = 0; i < A.length; i++) {
//     answer += A[i] * B[i];
//   }
//   return answer;
// }

// console.log(solution([1, 4, 2], [5, 4, 4]));
// console.log(solution([1, 2], [3, 4]));

function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}

console.log(solution([1, 4, 2], [5, 4, 4]));
console.log(solution([1, 2], [3, 4]));
