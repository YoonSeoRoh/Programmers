//내 코드
// function solution(array, commands) {
//   var answer = [];
//   var temp = [];
//   for (i = 0; i < commands.length; i++) {
//     temp = array.slice(commands[i][0] - 1, commands[i][1]);
//     temp.sort((a, b) => a - b);
//     answer.push(temp[commands[i][2] - 1]);
//   }
//   return answer;
// }

//더 간결한 코드
function solution(array, commands) {
  return commands.map((v) => {
    return array
      .slice(v[0] - 1, v[1])
      .sort((a, b) => a - b)
      .slice(v[2] - 1, v[2])[0];
  });
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
