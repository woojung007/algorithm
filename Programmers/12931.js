// https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  let answer = 0;
  let arr = String(n);
  for (let i = 0; i < n.length; i++) {
    answer += Number(arr[i]);
  }
}
