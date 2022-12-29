// 자연수 뒤집어 배열로 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
  let answer = [];
  answer = n.toString().split("").map(Number).reverse();
  return answer;
}
