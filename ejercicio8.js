const avengers = ["Hulk", "Thor", "IronMan", "Captain A.", "Spiderman", "Captain M."];

function findLongestWord(param) {
  let longest = param[0];
  for (const word of param) {
    // ">" (y no ">=") para quedarnos con el primero si empatan
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

console.log(findLongestWord(avengers)); // "Captain A."
