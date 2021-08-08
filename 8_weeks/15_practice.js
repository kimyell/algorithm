function solution(n, k, arr, m) {
  let answer = 0;
  function DFS(currentIndex, beginNumber, sum) {
    if (currentIndex === k) {
      if (sum % m === 0) { // m의 배수
        answer++;
      }
    } else {
      for (let i = beginNumber; i < n; i++) {
        DFS(currentIndex + 1, i + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0, 0);
  return answer;
}
let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
