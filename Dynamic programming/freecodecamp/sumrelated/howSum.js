// Returns any possible combinations like any one of them;
function howSum(targetSum, numbers, memo = {}) {
   if (targetSum in memo) return memo[targetSum];
   if (targetSum === 0) return [];
   if (targetSum < 0) return null;
   for (let num of numbers) {
      const remainder = targetSum - num;
      const remainderResult = howSum(remainder, numbers, memo);
      if (remainderResult) {
         return (memo[targetSum] = [...remainderResult, num]);
      }
   }
   return (memo[targetSum] = null);
}
