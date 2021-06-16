function solution(arr) {
  let result = 0;
  arr.sort((a, b) => {
    // 회의가 일찍 끝나는게 우선 순위
    if(a[1] === b[1]) return a[0] - b[0]; // 끝나는 시간이 같을 경우 시작 시간이 먼저인게 우선 순위
    else return a[1] - b[1]
  })
  let endTime = 0;
  for (let i of arr) {
    // 다음 회의의 시작시간 >= 이전 회의의 끝나는 시간
    if(i[0] >= endTime) {
      result++;
      endTime = i[1]; // 이전 회의의 끝나는 시간
    }
  }
  return result;
}

let arr = [
  [1, 4], // start, end
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7]
];
console.log(solution(arr));