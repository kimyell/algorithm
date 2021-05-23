'use strict'

function removeBracket(input) {
  if (input.length > 100) {
    throw '입력값은 최대 100자리입니다.';
  }

  const stack = [];
  let result = '';

  [...input].forEach(e => {
    if ( e === '(' ) {
      stack.push('');
    } else if ( e === ')' ) {
      stack.pop();
    } else {
      if ( stack.length === 0 ) {
        result += e;
      }
    }
  });

  console.log(result);
}
removeBracket('(A(BC)D)EF(G(H)(IJ)K)LM(N)');
