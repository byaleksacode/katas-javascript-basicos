const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(param) {
  let total = 0;
  for (const element of param) {
    if (typeof element === "number") {
      total += element;
    } else {
      total += element.length;
    }
  }
  return total;
}

console.log(averageWord(mixedElements)); // 41
