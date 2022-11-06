// function solution(strings, n) {
//   return strings.sort((a, b) => {
//     if (a[n] > b[n]) return 1;
//     if (a[n] < b[n]) return -1;
//     if (a[n] === b[n]) return (a > b) - (a < b);
//   });
// }

// console.log(solution(["sun", "bed", "car"], 1));
// console.log(solution(["abce", "abcd", "cdx"], 2));

function solution(strings, n) {
  return strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  );
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));
