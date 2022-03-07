//내가 쓴 코드
// function solution(n) {
//   var answer = 0;
//   var arr = (n + "").split("").map(function (item) {
//     return parseInt(item);
//   });
//   answer = arr.reduce((acc, cur) => acc + cur);
//   return answer;
// }

//더 간결한 코드
function solution(n) {
  //초기값을 0으로 정수화
  return (n + "").split("").reduce((acc, cur) => acc + parseInt(cur), 0);
}

console.log(solution(123));
console.log(solution(987));
