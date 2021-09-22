// 최대 부분 증가수열
function solution(arr) {
  let answer = 0;
  let dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j];
      }
    }
    dy[i] = max + 1;
    answer = Math.max(answer, dy[i]);
  }
  return answer;
}

const arr = [5, 3, 7, 8, 6, 2, 9, 4]; //4
const arr2 = [2, 7, 5, 8, 6, 4, 7, 12, 3]; //5
const arr3 = [12, 1, 2, 3, 15]; //4
console.log(solution(arr));
console.log(solution(arr2));
console.log(solution(arr3));