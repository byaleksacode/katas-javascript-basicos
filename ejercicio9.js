const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let total = 0;
  for (const number of param) {
    total += number;
  }
  return total;
}

console.log(sumAll(numbers)); // 151
