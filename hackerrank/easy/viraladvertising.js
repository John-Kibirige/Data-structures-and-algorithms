// https://www.hackerrank.com/challenges/strange-advertising/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

function viralAdvertising(n) {
   let shared = 5,
      liked = 2,
      cumulative = 2,
      prev = 2;

   for (let d = 2; d <= n; d++) {
      shared = prev * 3;
      liked = Math.floor(shared / 2);
      cumulative += liked;
      prev = liked;
   }

   return cumulative;
}
