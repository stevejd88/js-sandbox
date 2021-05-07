// Compare two arrays and return a new array with any items only found in one of
// the two given arrays, but not both. In other words, return the symmetric
//  difference of the two arrays.

// function diffArray(arr1, arr2) {
//   let newArr = [],
//     first,
//     second;

//   if (arr1.length > arr2.length) {
//     first = arr1;
//     second = arr2;
//   } else {
//     first = arr2;
//     second = arr1;
//   }

//   for (let i = 0; i < first.length; i++) {
//     for (let j = 0; j < second.length; j++) {
//       if (!first.includes(second[j]) && !newArr.includes(second[j])) {
//         newArr.push(second[j]);
//         console.log(newArr);
//       } else if (!second.includes(first[i]) && !newArr.includes(first[i])) {
//         newArr.push(first[i]);
//         console.log(newArr);
//       }
//     }
//   }
//   return newArr;
// }

function diffArray(arr1, arr2) {
  const array = arr1.concat(arr2);
  let newArr = [];

  array.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });

  return newArr;
}

const output = diffArray(
  ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
  ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
);
console.log(output);
