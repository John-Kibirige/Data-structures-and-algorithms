// https://www.hackerrank.com/challenges/kaprekar-numbers/problem?h_r=next-challenge&h_v=zen

function kaprekarNumbers(p, q) {
   let finalResult = [];
   for (let i = p; i <= q; i++) {
      let kaprekar = getKaprekar(i);
      if (kaprekar !== undefined) finalResult.push(kaprekar);
   }
   console.log(
      finalResult.length !== 0
         ? finalResult.toString().split(",").join(" ")
         : "INVALID RANGE"
   );
}

// digit length, d,

function getKaprekar(num) {
   if (num === 1) return 1;

   let d = String(num).length;
   let square = Math.pow(num, 2);
   let stringed = String(square);
   let len = stringed.length;

   let breakPoint = len - d;
   let part1 = stringed.slice(0, breakPoint);
   let part2 = stringed.slice(breakPoint);

   if (Number(part1) > 0 && Number(part2) > 0) {
      let sum = Number(part1) + Number(part2);
      if (sum === num) return num;
   }
}
