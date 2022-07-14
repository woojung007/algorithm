// 팩토리얼 0의 개수 https://www.acmicpc.net/problem/1676
// 블로그 : https://velog.io/@eeeve/%EB%B0%B1%EC%A4%80-1676%EB%B2%88

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

function Factorial(input) {
  let answer = 0;
  if (input === 0) answer;
  for (let i = 1; i <= input; i++) {
    if (i % 5 === 0) answer++;
    if (i % 25 === 0) answer++;
    if (i % 125 === 0) answer++;
  }
  return answer;
}

console.log(Factorial(input));
