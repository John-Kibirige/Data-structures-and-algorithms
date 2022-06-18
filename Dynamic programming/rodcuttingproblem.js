// const price = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30];

// function cutRod(p, n) {
//    if (n === 0) return 0;
//    let q = -Infinity;
//    for (let i = 1; i <= n; i++) {
//       q = Math.max(q, p[i - 1] + cutRod(p, n - i));
//    }
//    return q;
// }

// console.log(cutRod(price, 4));

// Using the bottom up strategy
function cutRod(m, p) {
   const cache = { 0: 0 };
   for (let n = 1; n <= m; n++) {
      let current_max = -Infinity;
      for (let i = 1; i <= n; i++) {
         let value = p[i - 1] + cache[n - i];
         if (value > current_max) current_max = val;
      }
      cache[n] = current_max;
   }
   return cache[m];
}

// repeating the same method for recursion

// Steps taken to reach the final answer
/*
1. define the desired function with only n or m and p parameters 
2. create a cache variable to store the repeating value with 0 as the starting value
3. loop through the values of n from 1 up to m or n 
4. define a maximum value encountered so far 
5. define another loop where we are going to loop through the possible values of a given n value 
   and a maximum of these will be calculated using the stated method above
6. we shall update our maximum value depending on the value of value we calculate
7. cache this maximum value as the max value for a given value of n and repeat this for all values of n;
8. since at this time you will be having most of the values cached, you can now access any desired value for this 
*/
