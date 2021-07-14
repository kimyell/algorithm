/* 이진트리 순회(깊이우선탐색) */

function solution(v, type) {
  let answer = '';
  function DFS(v) {
    if(v > 7) return;
    else {
      switch (type) {
        case 'preorder': // 전위: (root) -> left -> right
          answer += v;
          DFS(v * 2);
          DFS(v * 2 + 1);
          break;
        case 'inorder':  // 중위: left -> (root) -> right
          DFS(v * 2);
          answer += v;
          DFS(v * 2 + 1);
          break;
        case 'postorder': // 후위: left -> right -> (root)
          DFS(v * 2);
          DFS(v * 2 + 1);
          answer += v;
          break;
        default:
          break;
      }
    }
  }
  DFS(v);
  return answer;
}

console.log(solution(1, 'preorder')); // 1 2 4 5 3 6 7
console.log(solution(1, 'inorder')); // 4 2 5 1 6 3 7
console.log(solution(1, 'postorder')); // 4 5 2 6 7 3 1