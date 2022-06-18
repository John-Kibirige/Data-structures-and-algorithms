function arrayManipulation(n, queries) {
   const arr = new Array(n).fill(0);
   let max = -Infinity;

   for (let q = 0; q < queries.length; q++) {
      let [a, b, k] = queries[q];

      for (let i = a; i <= b; i++) {
         arr[i] += k;
         if (arr[i] > max) max = arr[i];
      }
   }

   return max;
}