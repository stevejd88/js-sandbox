// Return the lowest index at which a value (second argument) should
// be inserted into an array (first argument) once it has been sorted.
//  The returned value should be a number.

function getIndexToIns(arr, num) {
  let index,
    newArr = [];

  // arr.forEach(number => {
  //   if (number < )
  // })

  arr.forEach((number) => {
    if (num > number) {
      index = arr.indexOf(number);
    }
  });
  // return index + 1;
  return newArr;
}

const output = getIndexToIns([2, 20, 10], 19);
console.log(output);
