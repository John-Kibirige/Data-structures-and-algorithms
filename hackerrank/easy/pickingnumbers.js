// https://www.hackerrank.com/challenges/picking-numbers/problem?h_r=next-challenge&h_v=zen

function pickingNumbers(a) {
   const set = new Set([...a]);
   let max = -Infinity;
   set.forEach((num) => {
      let values = a.filter((v) => v - num === 0 || v - num === 1);
      if (values.length > max) max = values.length;
   });
   return max;
}


