// 팩토리얼 : 1부터 n까지의 모든 자연수의 곱
// n! = n * (n - 1) * (n - 2) * ...*1
function solution(num) {
  if(num === 1) {
    return 1;
  } else {
    return num * solution(num -1); // 5 * 4 * 3 * 2 * 1
  }
}
console.log(solution(5));


// function solution(n) {
//   let answer;
//   function DFS(n) {
//     if(n === 1) {
//       return 1;
//     } else {
//       return n * DFS(n -1);
//     }
//   }
//   answer= DFS(n);
//   return answer;
// }
//
// console.log(solution(5));