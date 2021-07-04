function getCount(tracks, distance) {
  let horseCount = 1;
  let next = tracks[0] + distance; // 다음 마구간 위치 = 첫 번째 마구간 + 기준 거리
  // next = 4
  tracks.forEach(track => {
    if (next <= track) {
      next = track + distance;
      horseCount ++;
    }
  });
  return horseCount;
}

function solution(count, tracks) {
  tracks.sort((a, b) => a - b);       // 1. 정렬
  const max = Math.max(...tracks);    // [1,2,4,8,9] 의 max 값 --> 9

  if (count === 2) {
    return max - Math.min(...tracks); // [1,2,4,8,9] 의 최댓값에서 최솟값을 뺀 값
  }

  // 최적의 조건 : 전체 거리 / 말의 수
  let distance = Math.floor(max / count);  // 가장 먼 거리 / 말의 수 --> 평균 거리 3
  let flag = false;

  while (true) {
    const horseCount = getCount(tracks, distance);

    console.log("distance : " + distance);
    console.log("horseCount : " + horseCount);

    if (count == horseCount) {
      return distance;
    }

    if (count < horseCount) {
      if (flag) return distance;
      distance ++;
    } else {
      distance --;
      flag = true;
    }
  }
}

console.log(solution(4, [1, 2, 8, 4, 9]));
//5 3
//1 2 8 4 9