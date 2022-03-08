//내 코드
// function solution(numbers) {
//   var set = new Set();
//   for (i = 0; i < numbers.length; i++) {
//     for (j = i + 1; j < numbers.length; j++) {
//       set.add(numbers[i] + numbers[j]);
//     }
//   }
//   const answer = [...set];
//   answer.sort(function (a, b) {
//     return a - b;
//   });
//   return answer;
// }

//더 간결한 코드
function solution(numbers) {
  var set = new Set();
  for (i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      set.add(numbers[i] + numbers[j]);
    }
  }
  const answer = [...set];
  return answer.sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
