// 두 정수 사이의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
  if (a === b) {
    return a;
  }
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  const answer = new Array(max - min + 1).fill(1).reduce((acc, cur, i) => {
    const num = min + i;
    return acc + num;
  }, 0);
  return answer;
}
