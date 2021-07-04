function solution(n) {
  let result = '';
  function recursion(i) {
    if (i == 0) {
      return; // 종료조건
    } else {
      recursion(i-1);
      result += i;
    }
  }

  recursion(n);
  return result;
}

console.log(solution(5)); // 12345
