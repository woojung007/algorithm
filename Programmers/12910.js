// https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  if (answer.length === 0) {
    answer = [-1];
  }
  return answer.sort((a, b) => a - b);
}
