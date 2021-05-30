// 1. 왕자들을 1번부터 N번까지 차례로 번호
// 2. 1번 왕자부터 N번 왕자까지 순서대로 시계 방향으로 돌아가며 동그랗게 앉게 한다
// 3. 특정숫자를 외치면 제외
// 4. 제외된 다음 순서의 왕자부터 다시...반복...

function solution(total, target) {
  const queue = [];
  for (let i = 0 ; i < total ; i ++) {
    queue.push(i + 1);
  }

  let callNumber = 0;

  do {
    let prince = queue.shift();
    if (++callNumber === target) {
      // console.log(prince + '번 아웃');
      callNumber = 0;
    } else {
      queue.push(prince); // 맨 끝으로 이동
    }

  } while (queue.length !== 1);

  console.log(queue.shift());
}

solution(8, 3) // 7