// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  const regex = /\s|_|(?=[A-Z])/;

  const you = 'thisIsSpinalTap';
  console.log(you.replace(/([a-z])([A-Z])/g, '$1 $2'));

  return str.split(regex).join('-').toLowerCase();
}

const output = spinalCase('AllThe-small Things');
console.log(output);

// function spinalCase(str) {
//   var regex = /\s+|_+/g;

//   str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

//   return str.replace(regex, '-').toLowerCase();
// }
