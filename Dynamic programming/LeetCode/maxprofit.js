/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
   let min = prices[0];
   let sellingPrice = 0;
   for (let i = 1; i < prices.length; i++) {
      if (min > prices[i]) {
         min = prices[i];
      } else {
         let sp = prices[i] - min;
         if (sp > sellingPrice) sellingPrice = sp;
      }
   }
   return sellingPrice;
};

let prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));
