// Remove all falsy values from an array.

function bouncer(arr) {
  return arr.filter((item) => {
    if (item !== false) {
      return item;
    }
  });
}

const output = bouncer([7, 'ate', '', false, 9]); // [7, "ate", 9]
console.log(output);

/// ==================================================
// ********************* ANOTHER WAY *****************
// ===================================================
// function bouncer(arr) {
//   return arr.filter(Boolean);
// }
