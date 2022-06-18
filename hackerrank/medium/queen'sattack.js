// https://www.hackerrank.com/challenges/queens-attack-2/problem

function queensAttack(n, k, r_q, c_q, obstacles) {
   obstacles = obstacles.map((e) => e.toString());

   const stack = [
      { value: [r_q + 1, c_q], direction: "north" },
      { value: [r_q - 1, c_q], direction: "south" },
      { value: [r_q, c_q + 1], direction: "east" },
      { value: [r_q, c_q - 1], direction: "west" },
      { value: [r_q + 1, c_q + 1], direction: "north-east" },
      { value: [r_q + 1, c_q - 1], direction: "north-west" },
      { value: [r_q - 1, c_q - 1], direction: "south-west" },
      { value: [r_q - 1, c_q + 1], direction: "south-east" },
   ];

   let count = 0;

   // console.log("the count at this point ", count);

   while (stack.length > 0) {
      const { value, direction } = stack.pop();
      const [r, c] = value;
      if (r <= n && r >= 1 && c >= 1 && c <= n) {
         switch (direction) {
            case "north":
               if (!obstacles.includes(value.toString())) count++;
               if (!obstacles.includes([r + 1, c].toString())) {
                  stack.push({ value: [r + 1, c], direction: "north" });
               }
               break;
            case "south":
               if (!obstacles.includes(value.toString())) count++;
               if (!obstacles.includes([r - 1, c].toString()))
                  stack.push({ value: [r - 1, c], direction: "south" });
               break;
            case "west":
               if (!obstacles.includes(value.toString())) count++;
               if (!obstacles.includes([r, c - 1].toString()))
                  stack.push({ value: [r, c - 1], direction: "west" });

               break;
            case "east":
               if (!obstacles.includes(value.toString())) count++;
               if (!obstacles.includes([r, c + 1].toString()))
                  stack.push({ value: [r, c + 1], direction: "east" });

               break;
         }
      }
   }
   return count;
}

/*
   The plan is to use object with direction and value to take 
   then use a stack and only push to stack if the value in the specified direction is 
   feasible
*/
