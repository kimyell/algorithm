function solution(board) {
  let answer = 0;
  let limit = board.length;
  let queue = [];
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit; j++) {
      if (board[i][j] === 1) { // 섬인 경우
        board[i][j] = 0;
        queue.push([i, j]);
        answer ++;

        while (queue.length) {
          let [x, y] = queue.shift();
          for (let k = 0; k < 8; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (nx >=0 && nx < limit
              && ny >= 0 && ny < limit
              && board[nx][ny] === 1) { // 섬인 경우
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }
  return answer;
}
let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0]
];

console.log(solution(arr));