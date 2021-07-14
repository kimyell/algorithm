let inputArray;
let checked;
const result = [];
const SCORE_INDEX = 0;
const TIME_INDEX = 1;

function putAnswer() {
  let timeSum = 0;
  let scoreSum = 0;
  for(let i = 1; i <=inputArray.length; i++) {
    if(checked[i]) {
      const time = inputArray[i-1][TIME_INDEX];
      const score = inputArray[i-1][SCORE_INDEX];
      timeSum += time;
      scoreSum += score;
    }
  }
  result.push([scoreSum, timeSum]);
}

function DFS(v, flag) {
  checked[v] = flag;

  if(v === inputArray.length) { putAnswer(); }
  else {
    DFS(v + 1, 1);
    DFS(v + 1, 0);
  }
}

function solution(max, input) {
  inputArray = input;
  checked = Array.from({length: inputArray.length + 1}, () => 0);
  DFS(0, 0);

  let sumMax = 0;
  result.forEach(value => {
    if (value[TIME_INDEX] <= max ) {
      sumMax = Math.max(value[SCORE_INDEX], sumMax);
    }
  });

  console.log(sumMax);
}

solution(20, [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]]); // 41