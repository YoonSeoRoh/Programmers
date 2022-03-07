//내 코드
// function solution(arr) {
//   var answer = [];
//   var count = 0;
//   for (i = 1; i < arr.length; i++) {
//     if (arr[i - 1] != arr[i]) {
//       answer[count] = arr[i - 1];
//       count++;
//     }
//   }
//   answer[count] = arr[arr.length - 1];
//   return answer;
// }

//더 간결한 코드1
// function solution(arr) {
//   var answer = [];
//   answer.push(arr[0]);
//   for (i = 1; i < arr.length; i++) {
//     if (arr[i - 1] != arr[i]) {
//       answer.push(arr[i]);
//     }
//   }
//   return answer;
// }

//더 간결한 코드2
function solution(arr) {
  //val: 요소값, index: 순회하는 대상에서 요소의 index
  //해당 요소값이 다음 요소값과 다르면 반환 대상
  return arr.filter((val, index) => val != arr[index + 1]);
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
