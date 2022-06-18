// https://www.hackerrank.com/challenges/sherlock-and-cost/problem

/**
 * @param {Array} B
 */
function cost(B) {
   let high = 0,
      low = 0;

   for (let i = 1; i < B.length; i++) {
      const highToLowDiff = Math.abs(B[i - 1] - 1);
      const lowToHighDiff = Math.abs(B[i] - 1);
      const highToHighDiff = Math.abs(B[i] - B[i - 1]);

      let nextLow = Math.max(low, high + highToLowDiff);
      let nextHigh = Math.max(high + highToHighDiff, low + lowToHighDiff);

      low = nextLow;
      high = nextHigh;
   }

   return Math.max(high, low);
}

// these types of dp problems is quiet unique in that by all means the answer will be linear
// in terms of the running time

/*  
   So what we did was to consider all the possible 3 options at any one time and find a way of getting 
   one possible max and min or in this case high and low 

   the gist is in getting the next Low and next High 
*/
