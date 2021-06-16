function solution(times) {
  const START_CHAR = 's';
  const END_CHAR = 'e';

  const START = 0;
  const END = 1;

  const CHAR = 0;
  const TIME = 1;

  //  [14, 18],
  //   [12, 15],
  //   [15, 20],
  //   [20, 30],
  //   [5, 14]
  // [ ['s', 14], ['e', 18], ['s', 12], ['e', 15], ['s', 15], ['e', 20], ['s', 20], ['e', 30], ['s', 5], ['e', 14]]
  // [ , , , , , , , , ]
  // [ ['s', 5], ['s', 12], ['e', 14], ['s', 14], ['e', 15], ['s', 15], ['e', 18], ['e', 20], ['s', 20], ['e', 30] ]
  // count = 0
  // result = 2 = max(count, result)


  let timeline = [];
  times.forEach(time => {
    timeline.push([START_CHAR, time[START]]);
    timeline.push([END_CHAR, time[END]]);
  });

  timeline.sort((before, after) => {
    if (before[TIME] != after[TIME]) {
      return before[TIME] - after[TIME];
    }
    return before[CHAR].charCodeAt() - after[CHAR].charCodeAt(); // e가 우선
  });

  let count = 0;
  let result = 0;

  timeline.forEach(time => {
    if (time[CHAR] === START_CHAR) { // s
      count ++;
    } else { // e
      count --;
    }
    result = Math.max(result, count);
  })

  return result;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14]
];
console.log(solution(arr));