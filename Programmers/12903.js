// https://school.programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  let answer = "";
  let i = 0;
  i = Math.floor(s.length / 2);
  if (s.length % 2 === 1) {
    answer = s[i];
  } else {
    answer = s[i - 1] + s[i];
  }
  return answer;
}
