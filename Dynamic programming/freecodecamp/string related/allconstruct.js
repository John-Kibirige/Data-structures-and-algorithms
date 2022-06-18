function allConstruct(target, wordBank) {
   if (target === "") return [[]];

   const result = [];
   for (let word of wordBank) {
      if (target.indexOf(word) === 0) {
         const suffix = target.slice(word.length);
         let suffixWays = allConstruct(suffix, wordBank); // this will be a 2d array
         let targetWays = suffixWays.map((el) => [word, ...el]);
         result.push(...targetWays); // this reduces the nesting and is one of the most important steps
      }
   }
   return result;
}
