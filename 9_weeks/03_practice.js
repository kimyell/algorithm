function solution(board) {
  let answer = 0;
  // 좌 하 우 상
  let dx = [-1, 0, 1,  0]; // -1 좌, 1 우
  let dy = [0 , 1, 0, -1]; // -1 상, 1 하
  function DFS(x, y) {
    if (x === 6 && y === 6) answer++; // 목적지 도착
    else {
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (nx >= 0 && nx <= 6
          && ny >= 0 && ny <= 6
          && board[nx][ny] === 0) { // board 가 넘어 가지 않은 범위 또는 board 에서 0 일때 4방향으로 이동 탐색
          board[nx][ny] = 1; // 다시 안돌아가도록
          DFS(nx, ny); // 좌표 이동
          board[nx][ny] = 0; // 초기화
        }
      }
    }
  }
  board[0][0] = 1;
  DFS(0, 0);
  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0]
];

console.log(solution(arr));