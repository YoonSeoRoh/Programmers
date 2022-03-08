//내 코드
// function solution(s) {
//   const obj = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
//   ];
//   const arr = [...s];
//   var temp = [];
//   var array = [];
//   for (i = 0; i < arr.length; i++) {
//     if (isNaN(arr[i])) {
//       //숫자가 아니라면
//       temp.push(arr[i]);
//       if (obj.includes(temp.join(""))) {
//         var answer = obj.indexOf(temp.join(""));
//         temp = [];
//         array.push(answer);
//       }
//     } else {
//       array.push(arr[i]);
//     }
//   }
//   return parseInt(array.join(""));
// }

//더 간결한 코드1
// function solution(s) {
//   s = s
//     .replace(/zero/g, 0)
//     .replace(/one/g, 1)
//     .replace(/two/g, 2)
//     .replace(/three/g, 3)
//     .replace(/four/g, 4)
//     .replace(/five/g, 5)
//     .replace(/six/g, 6)
//     .replace(/seven/g, 7)
//     .replace(/eight/g, 8)
//     .replace(/nine/g, 9);
//   return parseInt(s);
// }

//더 간결한 코드2
function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    console.log(numbers[i]);
    console.log(arr);
    answer = arr.join(i);
    console.log(answer);
  }

  return Number(answer);
}

console.log(solution("one4seveneight"));
console.log(solution("23four5six7"));
console.log(solution("2three45sixseven"));
console.log("123");
