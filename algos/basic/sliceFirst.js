// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

function frankenSplice(arr1, arr2, n) {
  const newArr = [...arr2];
  newArr.splice(n, 0, ...arr1);
  return newArr;
}

const output = frankenSplice([1, 2, 3], [4, 5], 1); // [4, 1, 2, 3, 5]
console.log(output);
