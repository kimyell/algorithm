let inputArray;
let checked;
let result = false;
const sumSet = new Set();

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
  console.log("set : " + tempArray + ", sum : " + sum);

  if(!sumSet.has(sum)) {
    sumSet.add(sum);
  } else {
    console.log("ㄴ duplicate")
    result = true;
  }
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

function solution(input) {
  inputArray = input;
  checked = Array.from({length: inputArray.length + 1}, () => 0);
  DFS(0, 0);

  console.log(result ? 'TRUE' : 'FALSE');
}

// solution([1, 3, 5, 6, 7, 10]); // TRUE
// solution([1, 3, 5, 6, 7, 18]); // TRUE
solution([1, 3, 5]); // FALSE