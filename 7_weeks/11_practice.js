function solution(dvdCount, tracks) {
  let total = tracks.reduce((accumulator, currentValue) => accumulator + currentValue);
  // 최적의 조건 : 트랙의 총용량 / DVD 의 총 갯수
  let capacity = Math.floor(total / dvdCount);

  while (true) {
    const DVDList = [];
    let DVD = [];
    let sum = 0;

    tracks.forEach(track => {
      if ((sum + track) <= capacity) {
        DVD.push(track);
        sum += track;
      } else {
        DVDList.push(DVD);
        DVD = [track];
        sum = track;
      }
    });

    if (DVD.length !== 0) {
      DVDList.push(DVD);
    }

    console.log("capacity : " + capacity + ", dvds : " + JSON.stringify(DVDList));

    if (DVDList.length <= dvdCount) {
      const minimum = Math.max(...tracks);
      return capacity < minimum ? minimum : capacity;
    }

    capacity ++;
  }
}

console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));