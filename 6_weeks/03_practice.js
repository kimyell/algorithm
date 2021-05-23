function solution(input) {
  const board = input.board;
  const moves = input.moves;

  const stack = [];
  let removeCount = 0;

  moves.forEach(number => {
    let index = number -1;

    for (const row of board) {
      let cell = row[index];
      if (cell === 0) {
        continue;
      }

      row[index] = 0;

      if (stack.length === 0) {
        stack.push(cell);
        break;
      }

      let peek = stack.pop();

      if (peek === cell) {
        removeCount ++;
        break;
      }

      stack.push(peek);
      stack.push(cell);
      break;
    }
  });
  console.log(removeCount);
}

const boardList = [
  {
    board: [
      [0,0,0,0,0],
      [0,0,1,0,3],
      [0,2,5,0,1],
      [4,2,4,4,2],
      [3,5,1,3,1]],
    moves: [1,5,3,5,1,2,1,4]
  } // 2

];

boardList.forEach(input => solution(input));