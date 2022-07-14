// https://school.programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
  for (var answer = 0; answer < 500; answer++) {
    if (num == 1) {
      return answer;
    } else if (num % 2 === 0) {
      num = num / 2;
    } else if (num % 2 == 1) {
      num = num * 3 + 1;
    }
  }
  //if(answer == 500){return -1;}
  return -1;
}
