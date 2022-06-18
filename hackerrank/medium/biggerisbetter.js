// https://www.hackerrank.com/challenges/bigger-is-greater/problem

function biggerIsGreater(w) {
   let len = w.length;
   let mark;

   let i = len - 2;
   while (i >= 0) {
      let curr = w[i];
      let prev = w[i + 1];
      if (curr < prev) {
         mark = i;
         break;
      }
      i--;
   }

   let strSectionOne = w.slice(0, mark);
   let strSectionTwo = w.slice(mark + 1);
   let [big, small] = getSmallAndSecondBig(strSectionTwo);
   strSectionTwo = strSectionTwo.split("");
   strSectionTwo.splice(strSectionTwo.indexOf(big), 1);
   strSectionTwo.splice(strSectionTwo.indexOf(small), 1);
   strSectionTwo.push(w[mark]);
   strSectionTwo = strSectionTwo.sort().join("");

   return `${strSectionOne}${big}${small ? small : ""}${strSectionTwo}`;
}

// determine the smallest and second largest;
function getSmallAndSecondBig(str) {
   str = str.split("").sort().join("");
   let small = str[0];
   let big = undefined;
   for (let i = 1; i < str.length; i++) {
      let curr = str[i];
      if (big === undefined) {
         if (curr > small) big = curr;
      } else {
         if (curr > small && curr < big) {
            big = curr;
         }
      }
   }
   return [small, big];
}
