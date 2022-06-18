// https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill, k, b) {
   bill.splice(k, 1);
   let total = bill.reduce((tot, curr) => {
      tot += curr;
      return tot;
   }, 0);

   let bal = Math.abs(total / 2 - b);

   console.log(`${bal === 0 ? "Bon Appetit" : bal}`);
}
