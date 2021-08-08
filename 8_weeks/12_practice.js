/* 12. 조합의 경우 수 */
// 3 <= n <=33
// 0 <= r <= n
// nCr = n-1Cr-1 + n-1Cr
function solution(n, r) {
  let answer;
  let dynamicArr = Array.from(Array(n+1), () => Array(n+1).fill(0));

  function DFS(n, r) {
    if (dynamicArr[n][r] > 0) { // memoization
      return dynamicArr[n][r];
    }
    if (n === r || r === 0) { // 종료 조건
      return 1;
    } else {
      return dynamicArr[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
    }
  }
  answer = DFS(n, r);
  return answer;
}

console.log(solution(5, 3));
console.log(solution(33, 19));