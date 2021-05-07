// We'll pass you an array of two numbers. Return the sum of those two numbers plus
// the sum of all the numbers between them. The lowest number will not always come first.

function sumAll(arr) {
  const start = Math.min(...arr);
  const finish = Math.max(...arr);
  let newArr = [],
    count = start;

  while (count >= start && count <= finish) {
    newArr.push(count);
    count++;
  }

  return newArr.reduce((acc, current) => acc + current);
}

const output = sumAll([1, 4]); // 10
console.log(output);

// ANOTHER WAY
// function sumAll(arr) {
//   let max = Math.max(arr[0], arr[1]);
//   let min = Math.min(arr[0], arr[1]);
//   let sumBetween = 0;
//   for (let i = min; i <= max; i++) {
//     sumBetween += i;
//   }
//   return sumBetween;
// }
