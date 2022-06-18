// https://www.hackerrank.com/challenges/taum-and-bday/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

function taumBday(b, w, bc, wc, z) {
   // the logic is to convert every parameter to a big int
   [b, w, bc, wc, z] = [b, w, bc, wc, z].map((n) => BigInt(n));
   const convBlack = b * Math.min(bc, wc + z);
   const convWhite = w * Math.min(bc + z, wc);

   return convBlack + convWhite;
}

function taumBday(b, w, bc, wc, z) {
   let min = (a, b) => (a > b ? b : a);
   [b, w, bc, wc, z] = [b, w, bc, wc, z].map((n) => BigInt(n));
   return b * min(bc, wc + z) + w * min(wc, bc + z);
}
