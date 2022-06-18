function gridTraveler(m, n, memo) {
   memo = memo || {};
   let key = m + "," + n;
   //    if (memo[key]) return memo[key];
   if (key in memo) return memo[key];
   if (m === 0 || n === 0) return 0;
   if (m === 1 && n === 1) return 1;

   return (memo[key] =
      gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo));
}

// trying the bottom up method
function grid(m, n) {
   const memo = {};
   for (let i = 0; i <= m; i++) {
      for (let j = 0; j <= n; j++) {
         memo[i + "," + j] =
            i === 0 || j === 0
               ? 0
               : i === 1 && j === 1
               ? 1
               : memo[i - 1 + "," + j] + memo[i + "," + (j - 1)];
      }
   }
   return memo[m + "," + n];
}

// this works just fine
