// https://www.hackerrank.com/challenges/time-conversion/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

function timeConversion(s) {
   const gwm = s.slice(s.length - 2);
   let actual = s.slice(0, 2);
   const rest = s.slice(2, s.length - 2);

   const possTImeRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

   if (gwm === "AM") {
      if (actual === "12") return "00" + rest;
      let actualNum = Number(actual);
      let bool = possTImeRange.includes(actualNum);
      return actual + rest;
   }

   if (gwm === "PM") {
      if (actual === "12") return "12" + rest;
      let actualNum = Number(actual);
      let bool = possTImeRange.includes(actualNum);
      actualNum = actualNum + 12;
      return actualNum.toString() + rest;
   }
}

console.log(timeConversion("07:05:45PM"));

// finally got this one right;
