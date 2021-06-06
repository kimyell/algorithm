function sort(arr) {
  const positives = [];
  const negatives = [];

  arr.forEach(element => {
    if (element < 0) {
      negatives.push(element);
    } else {
      positives.push(element);
    }
  });

  return negatives.concat(positives);
}

const result = sort([1, 2, 3, -3, -2, 5, 6, -6]) // -3 -2 -6 1 2 3 5 6

console.log(result);