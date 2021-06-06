function solution(cacheSize, arr) {
  let cache = [];

  arr.forEach(element => {
    if (cache.includes(element)) {
      const idx = cache.indexOf(element);
      let temp = cache[idx];
      for (let i = 0 ; i < idx ; i ++) {
        cache[idx - i] = cache[idx - (1 + i)];
      }
      cache[0] = temp;
    }  else {
      let tempCache = [element];
      cache = tempCache.concat(cache.slice(0, cacheSize - 1));
    }
    console.log(element + ' >> ' + cache);
  });

  return cache;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7])); // 7 5 3 2 6