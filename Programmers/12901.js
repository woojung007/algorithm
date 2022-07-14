// https://school.programmers.co.kr/learn/courses/30/lessons/12901

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function solution(a, b) {
  //일요일 기준으로 며칠이 지났는지 알려줌
  let answer = new Date(2016, a - 1, b).getDay();
  console.log(answer);
  return week[answer];
}
