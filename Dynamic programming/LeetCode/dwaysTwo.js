/**
 * @param {string} s
 * @returns
 */
var numDecodings = (s) => {
   return split(s).reduce((acc, curr) => {
      acc += decodeNum(curr);
      return acc % 1_000_000_007;
   }, 0);
};

// Helper functions
// for splitting the given string into a workable array
function split(s, memo = {}) {
   if (s in memo) return memo[s];
   if (s === "*") return "123456789".split("");
   if (Number(s) in [1, 2, 3, 4, 5, 6, 7, 8, 9]) return [s];

   let pref = s.slice(0, 1);
   let suff = s.slice(1);

   let returnedValue = split(suff);

   if (pref === "*") {
      pref = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   } else {
      pref = [pref];
   }

   let result = [];
   for (let i of pref) {
      for (let j of returnedValue) {
         result.push(`${i}${j}`);
      }
   }
   return (memo[s] = result);
}

// for decoding a given number string
function decodeNum(str, memo = {}) {
   if (str in memo) return memo[str];
   if (str.length === 1 || str === "") return 1;
   if (str[0] === "0") return 0;

   const suffixOne = str.slice(1);
   const preffixTwo = str.slice(0, 2);
   const suffixTwo = str.slice(2);

   if (preffixTwo.length === 2 && Number(preffixTwo) > 26) {
      return (memo[str] = decodeNum(suffixOne, memo));
   }

   return (memo[str] = decodeNum(suffixOne, memo) + decodeNum(suffixTwo, memo));
}
// console.log(numDecodings("**34"));
// console.log(numDecodings("**11*"));
// console.log(numDecodings("**11*"));
// console.log(numDecodings("**11*"));
// console.log(
//    numDecodings(
//       "**11111111111111111111111111111111111111212121212212122212122212121212112212212121212121212111111111111111111111111111111*"
//    )
// );

console.log(numDecodings("*1*1*"));
console.log(numDecodings("*1*1*0"));
