/**
 *
 * @param {string} target
 * @param {Array} wordBank
 */
const countConstruct = (target, wordBank, memo = {}) => {
   if (target in memo) return memo[target];
   if (target === "") return 1;
   const count = 0;
   for (let word of wordBank) {
      if (target.indexOf(word) === 0) {
         const suffix = target.slice(word.length);
         let result = countConstruct(suffix, wordBank, memo);
         count += result;
      }
   }
   return (memo[target] = count);
};
