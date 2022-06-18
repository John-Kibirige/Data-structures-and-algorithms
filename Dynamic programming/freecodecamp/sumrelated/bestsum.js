// Returns the shortest of all combinations

function bestSum(target, numbers, memo = {}) {
   if (target in memo) return memo[target];
   if (target === 0) return [];
   if (target < 0) return null;

   let bestCombination = null;

   // branching logic
   for (let num of numbers) {
      const balance = target - num;
      let balanceResults = bestSum(balance, numbers, memo);
      if (balanceResults) {
         let currentCombination = [...balanceResults, num];
         if (
            bestCombination === null ||
            bestCombination.length > currentCombination.length
         ) {
            bestCombination = currentCombination;
         }
      }
   }

   return (memo[target] = bestCombination);
}
