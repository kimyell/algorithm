function solution(n, m) {
  let answer = [];
  let temp = Array.from ({length:m}, () => 0); // [0,0]
  function DFS(l) {
    if(l === m) {
      answer.push(temp.slice());
    }
    else {
      for(let i = 1; i <= n; i++) {
        temp[l] = i
        DFS(l + 1)
      }
    }
  }
  DFS(0);
  return { answer, count: answer.length };
}

console.log(solution(3, 2));

// [ 1, 1 ], [ 1, 2 ],
// [ 1, 3 ], [ 2, 1 ],
// [ 2, 2 ], [ 2, 3 ],
// [ 3, 1 ], [ 3, 2 ],
// [ 3, 3 ]


// function solution(n, m) {
//   const temp = [0, 0];
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       temp[0] = i;
//       temp[1] = j;
//       console.log(temp);
//     }
//   }
// }
//
// solution(3, 2);