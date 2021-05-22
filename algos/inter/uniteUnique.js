// In other words, all values present from all arrays should be included in their
//  original order, but with no duplicates in the final array.

function uniteUnique(arr) {
  let newArr = [];

  let args = [...arguments];

  args.forEach((array) => {
    for (let i = 0; i < array.length; i++) {
      if (newArr.indexOf(array[i]) === -1) {
        newArr.push(array[i]);
      }
    }
  });

  return newArr;
}

const output = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // [1, 3, 2, 5, 4]
console.log(output);
