// 문자열 다루기 기본
// https://school.programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i]) === true) {
      return false;
    }
  }
  return true;
}
