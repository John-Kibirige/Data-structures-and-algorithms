// the task here is to get all the 2^n combinations for a set of n letters or numbers

function combinations(array) {
   if (array.length === 0) return [[]];

   const firstEl = array[0];
   const rest = array.slice(1);
   const combsWithoutFirst = combinations(rest);
   const allCombs = combsWithoutFirst.reduce((acc, curr) => {
      acc.push(curr);
      acc.push([...curr, firstEl]);
      return allCombs;
   }, []);

   return allCombs;
}

// get combs without
// generate combs with the current element
// merge after and return
