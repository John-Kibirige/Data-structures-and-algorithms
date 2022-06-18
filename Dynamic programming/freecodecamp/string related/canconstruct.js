/**
 * Method will accept a word as our target and we will see if we can
 * construct it from the set of words given to us in the word bank;
 * @param {string} target
 * @param {Array} wordBank
 * @returns
 */

const canConstruct = (target, wordBank, memo = {}) => {
   if (target in memo) return memo[target];
   if (target === "") return true;
   for (let word of wordBank) {
      if (target.indexOf(word) === 0) {
         let suffix = target.slice(word.length);
         if (canConstruct(suffix, wordBank, memo)) {
            return (memo[target] = true);
         }
      }
   }
   return (memo[target] = false);
};

canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]);
canConstruct("skateboard", ["bo", "rd", "ate", "t", "sket", "sk", "bar"]);
canConstruct("", ["cat", "dog", "mouse"]);
canConstruct(
   "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
   [
      "e",
      "ee",
      "eee",
      "eeeeee",
      "eeeeeeeeeee",
      "eeeeeeeeeeeeeee",
      "eeeeeeeeeeeeeeeeeeeee",
   ]
);
