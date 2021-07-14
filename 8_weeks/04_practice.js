/* 부분집합 구하기(DFS) */
let input;
let checked;

function printAnswer() {
  let tmp = '';
  for(let i = 1; i <=input; i++) {
    if(checked[i]) tmp += i + ' ';
  }
  console.log(tmp);
}

function DFS(v, flag) {
  checked[v] = flag;

  if(v === input) {
    printAnswer();
  } else {
    DFS(v + 1, 1);
    DFS(v + 1, 0);
  }
}

function solution(n) {
  input = n;
  checked = Array.from({length: input + 1}, () => 0); // [0, 0, 0, 0]
  DFS(0, 0);
}

solution(3);