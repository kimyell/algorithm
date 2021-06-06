// 삽입 정렬: 한 번에 한 항목 씩 정렬 된 배열을 작성한다.
function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    index = i;
    while (arr[index - 1] > arr[index]) {
      [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];
      index--;
    }
  }
  return arr;
}

console.log(sort([3, 1, 4, 6, 5, 2]));