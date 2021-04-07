function fizzBuzz() {
  let count = 0,
    result = [];
  while (count <= 100) {
    if (count % 5 === 0 && count % 3 === 0) {
      result.push('FizzBuzz');
    } else if (count % 5 === 0) {
      result.push('Buzz');
    } else if (count % 3 === 0) {
      result.push('Fizz');
    } else {
      result.push(count);
    }

    count++;
  }
  return result;
}

const output = fizzBuzz();
console.log(output);
