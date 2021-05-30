// 쇠파이프

function solution(pipeline) {
  const stack = [];
  let beforeElement = '';
  let totalCount = 0;

  for (const element of pipeline) {
    if (element === '(') {
      stack.push(element);
    } else {
      stack.pop();

      if (beforeElement === '(') {
        totalCount += stack.length;
      } else {
        totalCount ++;
      }
    }
    beforeElement = element;
  }
  console.log(totalCount);
}

solution('()(((()())(())()))(())') // 17
solution('(((()(()()))(())()))(()())') // 24