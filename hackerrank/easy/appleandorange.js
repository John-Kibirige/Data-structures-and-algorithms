// https://www.hackerrank.com/challenges/apple-and-orange/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

function countApplesAndOranges(s, t, a, b, apples, oranges) {
   // handle apples
   const validApples = apples.filter((e) => e > 0);
   let countApples = 0;
   for (let apple of validApples) {
      let dist = apple + a;
      if (dist >= s && dist <= t) countApples++;
   }
   console.log(countApples);

   //  handle oranges
   const validOranges = oranges.filter((e) => e < 0);
   let countOranges = 0;
   for (let orange of validOranges) {
      let d = orange + b;
      if (d >= s && d <= t) countOranges++;
   }

   console.log(countOranges);
}
