// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  const string = str.split('');
  let numbers = [],
    query;

  for (let i = 0; i < string.length; i++) {
    numbers.push(string[i].charCodeAt(0));
  }

  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] !== numbers[j + 1] - 1) {
      query = numbers[j];
      break;
    }
  }

  if (
    String.fromCharCode(numbers[numbers.length - 1]) ===
    String.fromCharCode(query)
  ) {
    return undefined;
  }

  return String.fromCharCode(query + 1);
}

const output = fearNotLetter('abce');
console.log(output);

// ============================================================
// ===================== ANOTHER WAY ==========================
// ============================================================

// function fearNotLetter(str) {
//   for (let i = 1; i < str.length; ++i) {
//     if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
//       return String.fromCharCode(str.charCodeAt(i - 1) + 1);
//     }
//   }
// }
