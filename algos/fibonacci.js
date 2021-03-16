function fibonacci(arr, n) {
  let next,
    prev = arr[0],
    last = arr[1],
    count = 0;

  while (n > count) {
    next = prev + last;
    prev = last;
    last = next;
    arr.push(next);
    count++;
  }

  return arr;
}

const output = fibonacci([1, 1], 5);
console.log(output);
