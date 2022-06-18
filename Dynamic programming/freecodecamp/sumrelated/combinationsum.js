const combinationSum = (target, numbers) => {
   if (target === 0) return [[]];
   if (target < 0) return null;

   let result = [];
   for (let num of numbers) {
      const balance = target - num;
      let balanceReturn = combinationSum(balance, numbers);
      if (balanceReturn !== null) {
         let updatedBalanceReturn = balanceReturn.map((el) => [num, ...el]);
         result.push(...updatedBalanceReturn);
      }
   }
   return result;
};
