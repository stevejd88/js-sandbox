function sumFibs(num) {
  let next,
    fib = [1, 1],
    prev = fib[0],
    last = fib[1],
    count = 2;

  while (count < num) {
    next = prev + last;
    prev = last;
    last = next;
    fib.push(next);
    count++;
  }

  return fib
    .filter((number) => number % 2 !== 0 && number <= num)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
}

const output = sumFibs(75025);
const output2 = sumFibs(75024);

console.log(output);
console.log(output2);

// ============================================================
// ===================== ANOTHER WAY ==========================
// ============================================================
// function sumFibs(num) {
//   let prevNumber = 0;
//   let currNumber = 1;
//   let result = 0;
//   while (currNumber <= num) {
//     if (currNumber % 2 !== 0) {
//       result += currNumber;
//     }
//     currNumber += prevNumber;
//     prevNumber = currNumber - prevNumber;
//   }

//   return result;
// }
