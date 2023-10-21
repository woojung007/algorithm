// n개 간격의 원소들
// https://school.programmers.co.kr/learn/courses/30/lessons/181888

function solution(num_list, n) {
  let answer = [];

  num_list.forEach((num, index) => {
    if (index % n === 0) {
      answer.push(num);
    }
  });

  return answer;
}
