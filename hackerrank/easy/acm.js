// https://www.hackerrank.com/challenges/acm-icpc-team/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

function acmTeam(topics) {
   // convert the strings to arrays
   topics = topics.map((element) => {
      return element.split("").reduce((acc, curr, index) => {
         if (curr === "1") acc.push(index + 1);
         return acc;
      }, []);
   });

   const clone = [...topics];

   let n = clone.length;

   //  monitor max
   let max = 0;

   //  for generating the pairs and merging and getting highest;
   const memo = {};

   // generate all possible values and at the same time you ....

   for (let i = 1; i < n; i++) {
      for (let j = i + 1; j <= n; j++) {
         if (clone[j - 1]) {
            let merged = new Set([...clone[i - 1], ...clone[j - 1]]);
            let len = merged.size;
            if (len > max) max = len;
            if (!(len in memo)) memo[len] = 1;
            else memo[len] += 1;
         }
      }
   }

   return [max, memo[max]];
}
