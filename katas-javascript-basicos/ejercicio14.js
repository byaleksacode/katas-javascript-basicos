const counterWords = [
  "code", "repeat", "eat", "sleep", "code", "enjoy",
  "sleep", "code", "enjoy", "upgrade", "code"
];

function repeatCounter(param) {
  const counter = {};
  for (const word of param) {
    if (counter[word]) {
      counter[word]++;
    } else {
      counter[word] = 1;
    }
  }
  return counter;
}

console.log(repeatCounter(counterWords));
