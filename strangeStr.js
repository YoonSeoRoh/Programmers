// function solution(s) {
//   var answer = [];
//   answer = s.split("");
//   return answer
//     .map((currentValue, index) => {
//       return index % 2 === 0
//         ? currentValue.toUpperCase()
//         : currentValue.toLowerCase();
//     })
//     .join("");
// }

//console.log(solution("try hello world"));

var temp = "hello world";
var ex = "helloworld  ";

var array1 = [];
var array2 = [];

array1 = temp.split("");
array2 = ex.split("");

console.log(array1.join(""));
console.log(array2.join(""));
for (i = 0; i < array2.length; i++) {
  console.log(array2[i]);
}
