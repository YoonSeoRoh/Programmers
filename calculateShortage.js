//내 코드
// function solution(price, money, count) {
//   var answer = 0;
//   for (i = 1; i <= count; i++) {
//     answer += price * i;
//   }
//   answer = money - answer;
//   if (answer >= 0) {
//     answer = 0;
//   } else {
//     answer = -answer;
//   }
//   return answer;
// }

//더 간결한 코드
function solution(price, money, count) {
  let answer = 0;
  for (let i = 1; i <= count; i++) {
    answer += price * i;
  }
  return answer > money ? answer - money : 0;
}

console.log(solution(3, 20, 4));
