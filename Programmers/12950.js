// https://school.programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
  let answer = [[]];

  for (let i = 0; i < arr1.length; i++) {
    answer = arr1[i][i] + arr2[i][i];
  }
  return answer;
}
