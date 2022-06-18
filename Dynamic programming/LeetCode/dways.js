/**
 *
 * @param {string} s
 */
function numDecodings(s, memo = {}) {
   // check if string exists in the memo
   if (s in memo) return memo[s];
   // base cases
   if (s[0] === "0") return 0;
   if (s.length == 1 || s === "") return 1;

   // declare some suffix and prefixes to use
   const suffixOne = s.slice(1);
   const preffixTwo = s.slice(0, 2);
   const suffixTwo = s.slice(2);
   // codition for suffixTwo values that when converted to numbers, exceed the required range of 10 - 26
   if (preffixTwo.length === 2 && Number(preffixTwo) > 26) {
      return (memo[s] = numDecodings(suffixOne, memo));
   }

   return (memo[s] =
      numDecodings(suffixOne, memo) + numDecodings(suffixTwo, memo));
}
