// 문자열 내 p와 y의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
  let arr = s.toLowerCase().split("");
  let countP = 0;
  let countY = 0;

  arr.filter((item) => {
    if (item === "p") countP++;
  });
  arr.filter((item) => {
    if (item === "y") countY++;
  });

  if (countP === countY) {
    return true;
  } else {
    return false;
  }
}
