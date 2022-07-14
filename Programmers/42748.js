// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  let answer = [];

  for (let idx = 0; idx < commands.length; idx++) {
    const i = commands[idx][0];
    const j = commands[idx][1];
    const k = commands[idx][2];
    console.log(commands[idx], i, j);

    const result = array.slice(i - 1, j).sort((a, b) => {
      return a > b ? 1 : -1;
    });
    answer.push(result[k - 1]);
  }
  return answer;
}
