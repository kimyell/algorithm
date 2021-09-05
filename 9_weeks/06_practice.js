function solution(board) {
  let answer = 0;
  let limit = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function DFS(x, y) {
    board[x][y] = 0;
    for (let k = 0; k < 8; k++) { // 8방향
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >=0 && nx < limit
        && ny >= 0 && ny < limit
        &&  board[nx][ny] === 1) { // 섬인 경우
        DFS(nx, ny);
      }
    }
  }
  for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit; j++ ) {
      if (board[i][j] === 1) { // 섬인 경우
        answer++;
        DFS(i, j);
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