function solution(s) {
  let stack = [s[0]];
  for (i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0 ? 1 : 0;
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));