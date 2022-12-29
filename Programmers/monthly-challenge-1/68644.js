// 두 개 뽑아서 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  const answer = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let l = i + 1; l < numbers.length; l++) {
      let sum = numbers[i] + numbers[l];
      answer.add(sum);
    }
  }
  return [...answer].sort((a, b) => a - b);
}
