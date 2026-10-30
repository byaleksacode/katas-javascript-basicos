const nameFinder = [
  "Peter", "Steve", "Tony", "Natasha", "Clint", "Logan",
  "Xabier", "Bruce", "Peggy", "Jessica", "Marc"
];

function finderName(param, name) {
  const position = param.indexOf(name);
  if (position !== -1) {
    return [true, position];
  }
  return false;
}

console.log(finderName(nameFinder, "Logan")); // [ true, 5 ]
console.log(finderName(nameFinder, "Aleksa")); // false
