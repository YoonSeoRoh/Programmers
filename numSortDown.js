//내 코드
// function solution(n) {
//   return parseInt(
//     n
//       .toString()
//       .split("")
//       .sort((a, b) => b - a)
//       .join("")
//   );
// }

//다른 코드
function solution(n) {
  //참고로 숫자로써 푸는 것이 실행속도가 더 빠름
  //js에서 자동형변환을 사용하면 number+string => string, string*number => number
  //예를 들면, 1+"" => "1", "1"*1 => 1
  const newN = n + "";
  console.log(typeof newN);
  const newArr = newN.split("").sort().reverse().join("");
  console.log(typeof newArr);
  return +newArr;
}

console.log(solution(118372));
