// https://www.hackerrank.com/challenges/the-power-sum/problem

function powerSum(X, N) {
   const nth_root = Math.floor(Math.pow(X, 1 / N));
   let numbers = [];
   for (let i = 1; i <= nth_root; i++) {
      numbers.push(Math.pow(i, N));
   }

   const returned = combinations(numbers).reduce((tot, value) => {
      if (value === X) tot++;
      return tot;
   }, 0);

   return returned;
}

function combinations(arr) {
   if (arr.length === 0) return [0];

   const firstEl = arr[0];
   const rest = arr.slice(1);

   const combsWithoutFirst = combinations(rest);
   return combsWithoutFirst.reduce((acc, curr) => {
      acc.push(curr); // without
      acc.push(curr + firstEl); // with
      return acc;
   }, []);
}

// solution
