// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

function jumpingOnClouds(c) {
   // generate an object with index as keys and viable values as values
   // then loop through them while counting

   const memo = {};
   for (let i = 0; i < c.length; i++) {
      if (c[i] === 0) {
         let temp = [];
         let next = c[i + 1];
         let next_next = c[i + 2];
         if (next === 0) temp.push(i + 1);
         if (next_next === 0) temp.push(i + 2);
         memo[i] = temp;
      }
   }

   const list = [0];
   let counter = 0;
   while (list.length > 0) {
      const curr = list.shift();
      let highest = Math.max(...memo[curr]);
      if (highest in memo) {
         counter++;
         list.push(highest);
      }
   }

   return counter;
}
