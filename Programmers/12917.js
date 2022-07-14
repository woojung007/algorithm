// https://school.programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
  }
  arr.sort((a, b) => {
    return a > b ? -1 : 1;
  });
  console.log(arr);
  return arr.join("");
}
