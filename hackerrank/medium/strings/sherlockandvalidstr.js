// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem

function isValid(s) {
   const memo = {};

   for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (!(char in memo)) memo[char] = 1;
      else memo[char] += 1;
   }

   const listOfValues = Object.values(memo);
   const boolList = [];

   // case when every character is the same
   if (boolList.every((e) => listOfValues[0])) return "YES";

   // case when we need to do a one reduction
   for (let j = 0; j < listOfValues.length; j++) {
      const clone = [...listOfValues];
      if (clone[j] > 1) {
         clone[j] = clone[j] - 1;
         boolList.push(clone.every((e) => e === clone[0]));
      } else {
         clone.splice(j, 1);
         boolList.push(clone.every((e) => e === clone[0]));
      }
   }

   return boolList.includes(true) ? "YES" : "NO";
}
