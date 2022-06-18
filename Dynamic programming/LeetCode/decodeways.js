/**
 *
 * @param {string} str
 */

function numDecoding(str, memo = {}) {
   // base cases
   if (str in memo) return memo[str];
   if (str.indexOf("0") === 0) return [];
   if (str.length === 1) return str;

   let result;
   if (str.length === 2) {
      result = Number(str) > 26 ? [] : [str];
   } else {
      result = []; c
   }

   for (let i = 1; i < str.length; i++) {
      let prefix = str.slice(0, i);
      let suffix = str.slice(i);
      for (let w of numDecoding(prefix, memo)) {
         for (let p of numDecoding(suffix, memo)) {
            let combined = w + "," + p;
            if (!result.includes(combined)) {
               result.push(combined);
            }
         }
      }
   }
   return (memo[str] = result);
}

console.log("246891");
// function finalResult(results) {
//    return results.length;
// }

// finalResult(resuls);
