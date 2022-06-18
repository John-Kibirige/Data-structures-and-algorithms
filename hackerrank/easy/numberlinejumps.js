// https://www.hackerrank.com/challenges/kangaroo/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign&h_r=next-challenge&h_v=zen

function kangaroo(x1, v1, x2, v2) {
   for (let i = x1; i <= 100_000; i++) {
      x1 += v1;
      x2 += v2;
      if (x1 == x2) return "YES";
   }

   return "NO";
}
