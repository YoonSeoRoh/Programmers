function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);
  let l = 0;
  let r = people.length - 1;
  while (l <= r) {
    const sum = l < r ? people[l] + people[r] : people[r];
    if (sum > limit) {
      --r;
    } else {
      ++l;
      --r;
    }
    answer++;
  }
  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
