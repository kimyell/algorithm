// 버블 정렬: 인접한 두 원소를 검사하여 정렬한다.

const bubbleSort = function(arr) {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      console.log(arr);
    }
  }
  return arr;
};
const arr = [5, 3, 1, 6, 7, 2, 4, 8];
bubbleSort(arr);
