// 최솟값과 최댓값 https://www.acmicpc.net/problem/2357
// 블로그 : https://velog.io/@eeeve/%EB%B0%B1%EC%A4%80-2357%EB%B2%88

// let input = [];
let input = [
  [10, 4],
  75,
  30,
  100,
  38,
  50,
  51,
  52,
  20,
  81,
  5,
  [1, 10],
  [3, 5],
  [6, 9],
  [8, 10],
];

function Find(input) {
  let N = input[0][0];
  let M = input[0][1];
  let arrM = [];

  for (let l = input.length - M; l < input.length; l++) {
    arrM.push(input[l]);
  }

  let a;
  let b;
  let arr = [];
  let min;
  let max;
  let answer = [];

  for (let k = 0; k < arrM.length; k++) {
    a = arrM[k][0];
    b = arrM[k][1];

    for (let i = 1; i < input.length - M; i++) {
      arr = input.slice(a, b + 1);
      min = Math.min(...arr);
      max = Math.max(...arr);
    }
    answer.push([min, max]);
  }
  return answer;
}

console.log(Find(input));

// [ [ 5, 100 ], [ 38, 100 ], [ 20, 81 ], [ 5, 81 ] ]
