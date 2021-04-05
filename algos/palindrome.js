function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

// const output = isPalindrome('toot');
const output = isPalindrome('steven');
console.log(output);
