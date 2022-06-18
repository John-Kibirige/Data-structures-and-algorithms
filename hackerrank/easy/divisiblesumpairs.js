//  https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

function divisibleSumPairs(n, k, ar) {
   let original = [...ar];
   let count = 0;

   ar.forEach((value, index) => {
      let balance = original.slice(index + 1);
      for (let i of balance) {
         let provSum = value + i;
         if (provSum === k || provSum % k === 0) count++;
      }
   });

   return count;
}

// let n = 6,
//    k = 3,
//    ar = [1, 3, 2, 6, 1, 2];

let n = 6,
   k = 5,
   ar = [1, 2, 3, 4, 5, 6];

console.log(divisibleSumPairs(n, k, ar));
