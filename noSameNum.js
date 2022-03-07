//�� �ڵ�
// function solution(arr) {
//   var answer = [];
//   var count = 0;
//   for (i = 1; i < arr.length; i++) {
//     if (arr[i - 1] != arr[i]) {
//       answer[count] = arr[i - 1];
//       count++;
//     }
//   }
//   answer[count] = arr[arr.length - 1];
//   return answer;
// }

//�� ������ �ڵ�1
// function solution(arr) {
//   var answer = [];
//   answer.push(arr[0]);
//   for (i = 1; i < arr.length; i++) {
//     if (arr[i - 1] != arr[i]) {
//       answer.push(arr[i]);
//     }
//   }
//   return answer;
// }

//�� ������ �ڵ�2
function solution(arr) {
  //val: ��Ұ�, index: ��ȸ�ϴ� ��󿡼� ����� index
  //�ش� ��Ұ��� ���� ��Ұ��� �ٸ��� ��ȯ ���
  return arr.filter((val, index) => val != arr[index + 1]);
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
