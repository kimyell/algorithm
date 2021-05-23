function calculateWithOperation(left, right, operation) {
  switch(operation) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case '*':
      return left * right;
    case '/':
      return left / right;
  }
}

function calculate(input) {
  if (input.length > 50) {
    throw '연산식의 길이는 50을 넘지 않습니다.';
  }

  const numberRegEx = /[1-9]/;
  const operationRegEx = /[+-\\*\\/]/;

  const stack = [];

  [...input].forEach(element => {
    if (numberRegEx.test(element)) {
      stack.push(Number(element));
      return;
    }
    if (operationRegEx.test(element)) {
      const right = stack.pop();
      const left = stack.pop();
      const result = calculateWithOperation(left, right, element);

      console.log('%d %s %d = %d', left, element, right, result);

      stack.push(result);
    }
  });

  console.log(stack.pop());
}

calculate('352+*9-');