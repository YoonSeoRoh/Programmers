//내 코드
function solution(arr) {
  var answer = arr.reduce((acc, cur) => acc + cur);
  return answer / arr.length;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([5, 5]));
