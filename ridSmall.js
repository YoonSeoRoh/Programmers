function solution(arr) {
  return arr.length !== 1 ? arr.filter((i) => i !== Math.min(...arr)) : [-1];
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
