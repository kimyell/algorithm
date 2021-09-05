function calculateMove(current, end) {
  if (end < current) { // 도착지점을 넘어갔으면
    return -1;
  }

  return 2 < (end - current) ? 5 : 1; // diff 가 3이상일 때 돌아오더라도 +5
}

function solution(start, end) {
  let count = 0;
  let current = start;

  while(current != end) {
    const move = calculateMove(current, end)
    current += move;
    count ++;
  }

  console.log(start + " -> " + end + " : " + count);
  return count;
}

solution(5, 14);
solution(8, 3);

// function solution(start, end) {
//   let answer = 0;
//   let ch = Array.from({ length: 10001 }, () => 0);
//   let queue = [];
//   queue.push(start);
//   ch[start] = 1;
//   let level = 0;
//   while (queue.length) {
//     let len = queue.length;
//     for (let i = 0; i < len; i++) {
//       let x = queue.shift();
//       for (let nx of [x - 1, x + 1, x + 5]) {
//         if (nx === end) {
//           return level + 1;
//         } // 도착지점에 왔을때 level + 1
//         if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
//           ch[nx] = 1; // 반복하지 않기 위해 갔던 곳 체크
//           queue.push(nx);
//         }
//       }
//     }
//     level++;
//   }
//   return answer;
// }
//
// console.log(solution(5, 14));

