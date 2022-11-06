function solution(p, s) {
  let answer = [0];
  let stack = p.map((i, index) => Math.ceil((100 - i) / s[index]));
  let maxDay = stack[0];
  for (i = 0, j = 0; i < stack.length; i++) {
    if (stack[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = stack[i];
      answer[++j] = 1;
    }
  }
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
