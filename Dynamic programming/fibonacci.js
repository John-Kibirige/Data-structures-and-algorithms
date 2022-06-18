function test(name, email) {
   email = email || "kibs@john.com";
   // this is one way of declaring the defaults in js other than putting it as a parameter
   return {
      name: name,
      email: email,
   };
}

// employing  the same technique
function fib(n, memo) {
   memo = memo || {};
   if (memo[n]) return memo[n];
   if (n <= 1) return 1;
   return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
}

// www.better.dev.com

// for the fibonacci function
// we declare a normal function with params n and the cache
// this will be recursive in nature
// make the cache optional by using the || operator more so at the start
// check if there exist already a cached value of n
// also check the base case which is n <= 1
// the cache the fib(n-1) + fib(n-2) before you return it and that is it

// function memoizer(fun) {
//    let cache = {};

//    return function (n) {
//       if (cache[n] != undefined) return cache[n];
//       let result = fun(n);
//       cache[n] = result;
//       return result;
//    };
// }

// REPEATING THE FIB PROBLEM WITH A BOTTOM TOP APPROACH
function fib(n) {
   const cache = {};
   for (let i = 0; i <= n; i++) {
      cache[i] = i < 2 ? 1 : cache[i - 1] + cache[i - 2];
   }
   return cache[n];
}
