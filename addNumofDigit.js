//���� �� �ڵ�
// function solution(n) {
//   var answer = 0;
//   var arr = (n + "").split("").map(function (item) {
//     return parseInt(item);
//   });
//   answer = arr.reduce((acc, cur) => acc + cur);
//   return answer;
// }

//�� ������ �ڵ�
function solution(n) {
  //�ʱⰪ�� 0���� ����ȭ
  return (n + "").split("").reduce((acc, cur) => acc + parseInt(cur), 0);
}

console.log(solution(123));
console.log(solution(987));
