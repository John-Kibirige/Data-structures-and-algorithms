// https://www.hackerrank.com/challenges/coin-change/problem

/**
 *
 * @param {Number} n
 * @param {Array} c
 * @returns
 */
function getWays(n, c, memo = {}) {
   let key = n + "." + c;
   if (key in memo) return memo[key];
   if (n === 0 && c) return 1;
   if (!c.some((ele) => ele <= n)) return 0;

   const first = c[0];
   const bal = c.slice(1);

   let leftKey = n + "." + bal;
   let rightKey = n - first + "." + c;

   memo[leftKey] = getWays(n, bal, memo);
   memo[rightKey] = getWays(n - first, c, memo);

   return memo[leftKey] + memo[rightKey];
}

/*
The overall concept was on intentional dividing of the problem to subproblems 

do not change the value on the left and reduce or slice the array at 1; 

then on the right alter the n value while keeping the array intact;

then memoize all these {
  uniqueness came in when i had to memoize an array as or inform of a string element 
}

making the entire problem interesting

https://www.hackerrank.com/challenges/equal/problem?h_r=next-challenge&h_v=zen
*/
