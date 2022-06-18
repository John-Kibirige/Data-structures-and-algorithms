// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
   let maxValue = scores[0],
      minValue = scores[0];
   let maxCount = 0,
      minCount = 0;

   for (let i = 1; i < scores.length; i++) {
      let element = scores[i];
      if (element > maxValue) {
         maxCount++;
         maxValue = element;
      }
      if (element < minValue) {
         minCount++;
         minValue = element;
      }
   }

   return [maxCount, minCount];
}
