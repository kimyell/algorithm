// 쇠파이프

function solution(pipeline) {
  const stack = [];
  let lastElement = '';
  let totalCount = 0;

  for (const element of pipeline) {
    if (element === '(') {
      stack.push(element);
    } else {
      stack.pop();

      if (lastElement === '(') {
        totalCount += stack.length;
      } else {
        totalCount ++;
      }
    }
    lastElement = element;
  }
  console.log(totalCount);
}

solution('()(((()())(())()))(())') // 17
solution('(((()(()()))(())()))(()())') // 24