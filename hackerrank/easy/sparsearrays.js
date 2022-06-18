const strings = ["ab", "ab", "abc"];
const queries = ["ab", "abc", "bc"];

function matchingStrings(strings, queries) {
   const memo = {};
   strings.forEach((e) => {
      if (!(`${e}` in memo)) memo[`${e}`] = 1;
      else memo[`${e}`] += 1;
   });

   return queries.reduce((acc, curr) => {
      if (`${curr}` in memo) acc.push(memo[`${curr}`]);
      else acc.push(0);
      return acc;
   }, []);
}

console.log(matchingStrings(strings, queries));
