function getCount(tracks, stall) {
  let horseCount = 1;
  let distance = tracks[0] + stall;

  tracks.forEach(track => {
    if (distance <= track) {
      distance = track + stall;
      horseCount ++;
    }
  });
  return horseCount;
}

function solution(count, tracks) {
  tracks.sort((a, b) => a - b);
  const max = Math.max(...tracks);

  if (count === 2) {
    return max - Math.min(...tracks);
  }

  let stall = Math.floor(max / count);
  let flag = false;
  // 최적의 조건 : 전체 거리 / 말의 수

  while (true) {
    const horseCount = getCount(tracks, stall);

    console.log("stall : " + stall);
    console.log("horseCount : " + horseCount);

    if (count == horseCount) {
      return stall;
    }

    if (count < horseCount) {
      if (flag) stall;
      stall ++;
    } else {
      stall --;
      flag = true;
    }
  }
}

console.log(solution(3, [1, 2, 8, 4, 9]));
//5 3
//1 2 8 4 9