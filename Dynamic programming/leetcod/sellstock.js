/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
   let smallest = prices[0];
   let sellingPrice = 0;
   for (let i = 1; i < prices.length; i++) {
      if (prices[i] < smallest) {
         smallest = prices[i];
      } else {
         let sp = prices[i] - smallest;
         if (sp > sellingPrice) sellingPrice = sp;
      }
   }
   return sellingPrice;
};

console.log(maxProfit([7, 1, 2, 3, 4, 5, 2]));

// Logic
/*
loop through the array while updating the selling price and at the same time the minumum or  smallest stock prices 
*/
