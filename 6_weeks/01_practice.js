function solution(input) {
  if (input.length > 30) {
    console.log('입력값의 길이는 30보다 클 수 없습니다.');
    return;
  }

  const stack = [];

  for (const e of input) {
    if (e === '(') {
      stack.push('');

    } else if (e === ')') {
      if (stack.length === 0) {
        console.log('NO');
        return;
      }
      stack.pop();
    }
  }

  if (stack.length === 0) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

const inputList = [
  '(()(()))(()', // NO
  '()()()()()', // YES
  '()())' // NO
];

inputList.forEach(input => solution(input));