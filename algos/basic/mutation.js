// Return true if the string in the first element of the array contains
// all of the letters of the string in the second element of the array.

function mutation(arr) {
  const first = arr[0].toLowerCase();
  const second = arr[1].toLowerCase().split('');
  let judge = [];

  second.forEach((letter) => {
    if (!first.includes(letter)) {
      judge.push(1);
    }
  });

  return !judge.includes(1);
}

const output = mutation(['hello', 'hey']);
console.log(output);
