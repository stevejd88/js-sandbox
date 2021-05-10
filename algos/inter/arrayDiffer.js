// Compare two arrays and return a new array with any items only found in one of
// the two given arrays, but not both. In other words, return the symmetric
//  difference of the two arrays.

function diffArray(arr1, arr2) {
  let newArr = [];

  function filterArr(arrOne, arrTwo) {
    arrOne.forEach((number) => {
      if (!arrTwo.includes(number)) {
        newArr.push(number);
      }
    });
  }

  filterArr(arr1, arr2);
  filterArr(arr2, arr1);

  return newArr;
}

const output = diffArray(
  ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
  ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
);
console.log(output);

// ============================================================
// ===================== ANOTHER WAY ==========================
// ============================================================
// function diffArray(arr1, arr2) {
//   return [...diff(arr1, arr2), ...diff(arr2, arr1)];

//   function diff(a, b) {
//     return a.filter(item => b.indexOf(item) === -1);
//   }
// }
