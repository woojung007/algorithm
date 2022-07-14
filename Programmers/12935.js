// https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  let min = Math.min(...arr);

  let answer = arr.filter((num) => {
    return num !== min;
  });

  return answer.length === 0 ? [-1] : answer;
}
