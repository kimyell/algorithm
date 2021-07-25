function solution(m, arr) {
  let answer = [];
  n = arr.length;
  let checkList = Array.from({
    length: n
  }, () => 0);
  let temp = Array.from({
    length: m
  }, () => 0);

  function DFS(l) {
    if (l === m) {
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (checkList[i] === 0) { // 중복된 숫자가 아닐 경우
          checkList[i] = 1;
          temp[l] = arr[i];
          DFS(l + 1);
          checkList[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
