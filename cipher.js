function solution(s, n) {
  return s
    .split("")
    .map((i) => {
      if (i === " ") {
        return i;
      }
      return i.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(i.charCodeAt() + n - 26)
        : String.fromCharCode(i.charCodeAt() + n);
    })
    .join("");
}

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));
