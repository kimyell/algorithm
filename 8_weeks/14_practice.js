function solution(maxNumber, groupSize) {
  const result = [];
  const temp = Array.from({length:groupSize}, () => 0);

  function DFS(currentIndex, beginNumber) {
    if (currentIndex === groupSize) {
      result.push(temp.slice());
      return;
    }

    for (let i = beginNumber; i <= maxNumber ; i ++) {
      temp[currentIndex] = i;
      DFS(currentIndex + 1, i + 1);
    }
  }

  DFS(0, 1);
  return result;
}

console.log(solution(4, 2));