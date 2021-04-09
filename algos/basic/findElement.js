// Create a function that looks through an array arr and returns the
// first element in it that passes a 'truth test'.

function findElement(arr, func) {
  let num = arr.filter(func);

  return num[0];
}

const output = findElement([1, 2, 3, 4], (num) => num % 2 === 0);
console.log(output);
