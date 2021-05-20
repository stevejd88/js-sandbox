// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

function pairElement(str) {
  const pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };

  const dna = [];

  str.split('').forEach((protein) => {
    dna.push([protein, pairs[protein]]);
  });

  return dna;
}

const output = pairElement('ATCGA');
console.log(output);
