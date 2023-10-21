// 달리기 경주
// https://school.programmers.co.kr/learn/courses/30/lessons/178871?language=javascript

function solution(players, callings) {
  const indexList = {};

  // indexList setting
  players.forEach((player, index) => (indexList[player] = index));

  callings.forEach((call) => {
    let index1; // 추월한 선수의 순서
    let index2; // 추월당한 선수의 순서

    index1 = indexList[call];
    index2 = index1 - 1;

    let temp = players[index1]; // 추월한 선수

    players[index1] = players[index2]; // 다음 선수 자리에 이전 선수를 넣어준다.
    players[index2] = temp; // 이전 선수 자리에 추월한 선수를 넣어준다.

    // indexList update
    indexList[players[index1]] = index1;
    indexList[players[index2]] = index2;
  });
  return players;
}
