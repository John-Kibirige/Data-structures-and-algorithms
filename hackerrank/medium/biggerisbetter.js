// https://www.hackerrank.com/challenges/bigger-is-greater/problem

function biggerIsGreater(w) {
   const len = w.length;

   let mark;
   let counter = len - 2;
   let collectPrev = "";

   // use a while loop to track the index at which the prev value is greater than the current while
   // moving backwards
   while (counter >= 0) {
      let currChar = w[counter];
      let prevChar = w[counter + 1];
      collectPrev += prevChar;
      if (prevChar > currChar) {
         mark = counter;
         break;
      }
      counter--;
   }

   // the mark will be now used to get the desired

   if (mark !== undefined) {
      let remainingString = w.slice(mark + 1);
      let stringSectionOne = w.slice(0, mark);
      let midChar = getSmallestBig(w[mark], remainingString);
      let stringSectionTwo = customSplice(
         remainingString,
         remainingString.indexOf(midChar)
      );

      stringSectionTwo += w[mark];
      stringSectionTwo = stringSectionTwo.split("").sort().join("");
      return stringSectionOne + midChar + stringSectionTwo;
   } else {
      return "no answer";
   }
}

// helper function for getting the smallest big character that is greater than specified character  in a string
function getSmallestBig(char, string) {
   string = string.split("").sort().join("");
   let count = 0;

   while (count < string.length) {
      if (string[count] > char) {
         return string[count];
      }
      count++;
   }
}

// fabricating a custom made splice method for strings
function customSplice(string, index) {
   string = string.split("");
   string.splice(index, 1);
   return string.join("");
}
