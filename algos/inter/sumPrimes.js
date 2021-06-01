// A prime number is a whole number greater than 1 with exactly two divisors:
// 1 and itself. For example, 2 is a prime number because it is only divisible
// by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than
// or equal to num.

function sumPrimes(num) {
  let sum = [];
  let sum2 = [];
  for (let i = 2; i <= num; i++) {
    sum.push(i);
  }

  const isPrime = (num) => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  };

  sum.forEach((number) => {
    const yup = isPrime(number);

    if (yup) {
      sum2.push(number);
    }
  });

  return sum2.reduce((acc, curr) => {
    return acc + curr;
  });
}

const output = sumPrimes(10); // 17
console.log(output);
