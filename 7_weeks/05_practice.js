const changeArr = [120, 125, 152, 130, 135, 135, 143, 127, 160];

function solution(arr) {
  const changeIndex = [];
  let originalArr = arr.slice();
  arr = quickSort(arr);

  for (let i=0; i<arr.length; i++) {
    if (arr[i] !== originalArr[i]) {
      changeIndex.push(i+1);
    }
  }
  return changeIndex;
}

function quickSort(arr) {
  const len = arr.length;
  if(len === 0) return [];

  let left = [];
  let right = [];
  let pivot = arr[0];
  for(let i=1; i<len; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(solution(changeArr));