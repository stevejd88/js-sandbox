// Return the lowest index at which a value (second argument) should
// be inserted into an array (first argument) once it has been sorted.
//  The returned value should be a number.

function getIndexToIns(arr, num) {
  let newArr = arr.sort((a, b) => a - b);

  if (arr == false) {
    return 0;
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === num) {
      return i;
    } else if (num > newArr[i] && num < newArr[i + 1]) {
      return i + 1;
    } else if (num > newArr[newArr.length - 1]) {
      return arr.length;
    }
  }
}

const output = getIndexToIns([2, 5, 10], 15);
console.log(output);
