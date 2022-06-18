function lowerThan(n, array) {
   for (let i = array.length - 1; i >= 0; i--) {
      const element = array[i];
      if (element < n) return element;
   }
}

function longestSubsequence(arr) {
   const preceding = [];
   const path = {};
   for (let i of array) {
      path[i] = lowerThan(i, preceding);
      preceding.push(i);
   }
   return path;
}
