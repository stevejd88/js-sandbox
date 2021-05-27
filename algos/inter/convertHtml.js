// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string
// to their corresponding HTML entities.

function convertHTML(str) {
  return '&'.charCodeAt(0);
}

const output = convertHTML('Dolce & Gabbana');
console.log(output);
