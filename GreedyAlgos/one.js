// Suppose that in a strange country there are five types of coins with denominations of 15, 23, 29, 41, and 67 (all cents). Find a combination of these coins to pay the sum of 18 dollars and 8 cemts (1808 cents). You have enough coins of each type in your pocket.

// STRATEGY
// create a method that will allow the dividend and the divisor as the inputs and returns an array of the different set of remainders and quotients.
// starting with the given expected total as the dividend and the highest number as the divisor.
// after that we shall reverse the array of the remainders
// after that we shall have to call the same method for each and every result.
// the objective here is to reach the last value of the given values and having somewhere a remainder of zero;

function quotientRemainder(dividend, divisor) {
   let q = Math.floor(dividend / divisor);
   let r = dividend % divisor;
   const quotients = [q];
   const remainders = [r];
   while (q !== 1) {
      q--;
      r += divisor;
      quotients.push(q);
      remainders.push(r);
   }
   return {
      quotients: quotients,
      remainders: remainders,
   };
}
// ensure to filter out
function generateForEach(remainders, divisor) {
   const map = new Map();
   remainders.forEach((remainder) => {
      if (remainder >= divisor) {
         map.set(remainder, quotientRemainder(remainder, divisor));
      }
   });
   return map;
}

let resultFor67 = quotientRemainder(1808, 67);

// case for 41;
let resultFor41 = generateForEach(resultFor67.remainders, 41);

// case for 29;
// we have to loop through the remainders for the dirrent remaiders from the first case
console.log(resultFor41);
let allremaindersFrom41 = [];
for (let [k, v] of resultFor41) {
   allremaindersFrom41.push(v.remainders);
}
const mapResult = new Map();
allremaindersFrom41.forEach((array) => {
   mapResult.set(array, generateForEach(array, 29));
});

console.log(mapResult);
