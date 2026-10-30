const duplicates = [
  "sushi", "pizza", "burger", "potatoe", "pasta", "ice-cream",
  "pizza", "chicken", "onion rings", "pasta", "soda"
];

function removeDuplicates(param) {
  const result = [];
  for (const item of param) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

console.log(removeDuplicates(duplicates));
