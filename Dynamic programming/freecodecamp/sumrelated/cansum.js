// for this particular problem, your expected to return true if their exists a possible combination

function canSum(targetSum, numbers, memo = {}) {
   if (targetSum in memo) return memo[targetSum];
   if (targetSum === 0) return true;
   if (targetSum < 0) return false;

   for (let num of numbers) {
      const remainder = targetSum - num;
      if (canSum(remainder, numbers, memo)) {
         return (memo[targetSum] = true);
      }
   }
   return (memo[targetSum] = false);
}
