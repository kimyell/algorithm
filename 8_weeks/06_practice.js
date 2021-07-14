let inputArray;
let checked;
const result = [];

function putAnswer() {
  let sum = 0;
  let tempArray = [];
  for(let i = 1; i <=inputArray.length; i++) {
    if(checked[i]) {
      const source = inputArray[i-1];
      tempArray.push(source);
      sum += source;
    }
  }
  result.push(sum);
}

function DFS(v, flag) {
  checked[v] = flag;

  if(v === inputArray.length) {
    putAnswer();
  } else {
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
    if (value < max ) {
      sumMax = Math.max(value, sumMax);
    }
  });

  console.log(sumMax);
}

solution(259, [81, 58, 42, 33, 61]); // 242