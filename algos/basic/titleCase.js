// Return the provided string with the first letter of each word capitalized.
//  Make sure the rest of the word is in lower case.

function titleCase(str) {
  const split = str.toLowerCase().split(' ');

  return split
    .map((word) => {
      const first = word.slice(0, 1).toUpperCase();
      const rest = word.slice(1);
      return `${first}${rest}`;
    })
    .join(' ');
}

const output = titleCase('sHoRt AnD sToUt');
console.log(output);
