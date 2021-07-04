function solution(n) {
  let result = '';
  function recursion(i) {
    console.log(i);
    if (i == 0) {
      return; // 종료조건
    } else {
      recursion(parseInt(i / 2));
      result +=String(i % 2);
      console.log('rem :' + i % 2)
    }
  }

  recursion(n);
  return result;
}

console.log(solution(11)); //1011

// var value = 10;
// // 10진법 -> 2, 8, 16 진법으로 변환
// value.toString(2);    // 1010
// value.toString(8);    // 12
// value.toString(16);   // a
//
//
// var bin = 1010,
//   oct = 12,
//   hex = 'a';
// // 2, 8, 16 진법 -> 10진법으로 변환
// Number.parseInt(bin, 2);    // 10
// Number.parseInt(oct, 8);    // 10
// Number.parseInt(hex, 16);   // 10
