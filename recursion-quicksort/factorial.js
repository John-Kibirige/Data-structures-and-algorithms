// This function is going to use recursion to compute the factorial of a number n
function fact(n) {
   if (n === 1) {
      return 1;
   } else {
      return n * fact(n - 1);
   }
}

console.log(fact(78954));
