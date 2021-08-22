let result = 0;
let finalTarget = 0;

function createGraph(arr) {
  const graph = new Map();
  arr.forEach(item => {
    let source = item[0];
    let target = item[1];

    if (!graph.has(source)) {
      graph.set(source, []);
    }
    graph.get(source).push(target);
  });

  return graph;
}

function DFS(graph, source, prevSources) {
  if (!graph.has(source)) { // 더이상 탐색 할 대상이 없음
    return;
  }
  const targetList = graph.get(source);

  targetList.forEach(target => {
    if (prevSources && prevSources.includes(target)) { // 이전에 거친 정점은 패스
      return;
    }
    if (target === finalTarget) { // 탐색 완료
      result ++;
      return;
    }
    let tempPrevSources = [];
    if (prevSources) {
      tempPrevSources = prevSources.slice();
    }
    tempPrevSources.push(source);

    DFS(graph, target, tempPrevSources);
  });
}

function solution(n, arr) {
  finalTarget = n; // 최종 목적지 설정
  const graph = createGraph(arr);
  console.log(graph);

  DFS(graph, 1);

  console.log(result);
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5]
];

solution(5, arr);