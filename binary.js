function solution(s) {
  const answer = [];
  let number = s;
  let count = 0; //변환 횟수
  let numberOfZero = 0; //0의 갯수
  while (true) {
    if (number === "1") {
      break;
    }
    numberOfZero += number.split("0").length - 1; //0이 몇개인지
    number = number
      .split("")
      .filter((i) => i !== "0")
      .join("")
      .length.toString(2); //0제거 + 길이구하기 + 이진수로 변환
    count++;
  }
  answer.push(count);
  answer.push(numberOfZero);
  return answer;
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));
