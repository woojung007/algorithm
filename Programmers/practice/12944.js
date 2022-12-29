// 평균 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    answer = sum / arr.length;
  }
  return answer;
}
