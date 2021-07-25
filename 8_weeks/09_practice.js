function solution(expected, arr) {
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(coinCount, sum) {
    if (sum === expected) { // 기대값이랑 같을 때
      answer = Math.min(coinCount, answer);
      return;
    }
    else if (sum > expected) { // 기대값보다 클 때
      return;
    }
    else {
      for (let i = 0; i < arr.length; i++) {
        DFS(coinCount + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(15, [5, 2, 1]));