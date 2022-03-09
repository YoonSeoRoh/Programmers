//내 코드
// function solution(s) {
//   if (s.length === 4 || s.length === 6) {
//     return s.split("").every((cur) => !isNaN(cur));
//   }
//   return false;
// }

//더 간결한 코드
function solution(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

console.log(solution("a234"));
console.log(solution("1234"));
console.log(solution("1e22"));
