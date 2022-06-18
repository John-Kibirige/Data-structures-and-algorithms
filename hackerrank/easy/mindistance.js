// https://www.hackerrank.com/challenges/minimum-distances/problem

function minimumDistances(a) {
   // create a memo to store all values and an array of indices
   // loop through the memo

   const memo = {};
   a.forEach((value, index) => {
      if (!(value in memo)) memo[value] = [index];
      else memo[value].push(index);
   });

   let min = Infinity;
   for (let value of Object.values(memo)) {
      if (value.length === 2) {
         const [a, b] = value;
         let dif = Math.abs(a - b);
         if (dif < min) min = dif;
      }
   }

   const condition = Object.values(memo).every((e) => e.length === 1);

   return condition ? -1 : min;
}

let arr = [7, 1, 3, 4, 1, 7];
