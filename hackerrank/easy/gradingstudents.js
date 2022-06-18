// https://www.hackerrank.com/challenges/grading/problem?utm_
// campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

function gradingStudents(grades) {
   return grades.map((grade) => {
      let valueToReturn;
      if (grade >= 38) {
         if ((grade + 2) % 5 === 0) {
            valueToReturn = grade + 2;
         } else if ((grade + 1) % 5 === 0) {
            valueToReturn = grade + 1;
         } else {
            valueToReturn = grade;
         }
      } else {
         valueToReturn = grade;
      }
      return valueToReturn;
   });
}
