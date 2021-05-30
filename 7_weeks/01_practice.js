// 선택 정렬: 1회전을 수행할 때마다 가장 작은 값이 배열의 맨 앞에 오게 된다.

function selectionSort(arr) {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      // swap
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }

    console.log(arr);
  }
}
const arr = [5, 3, 1, 6, 7, 2, 4, 8];
selectionSort(arr);
