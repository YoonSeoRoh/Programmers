function solution(s) {
  if (s[0] !== "(") {
    return false;
  }
  let bal = 0;
  for (i = 0; i < s.length; i++) {
    bal += s[i] === "(" ? 1 : -1;
    if (bal < 0) return false;
  }
  return bal === 0 ? true : false;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
