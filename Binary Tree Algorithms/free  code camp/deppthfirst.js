// we can use a class to define a node and its properties

class Node {
   constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
   }
}

// from here we can then use this to construct as many as possible
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// implementing the function

// // Using iteration
// const depthFirstValues = (start) => {
//    // in case we are given a null start node
//    if (!start) return [];
//    const stack = [start];
//    let result = [];

//    while (stack.length) {
//       console.log("this is interesting");
//       let current = stack.pop();
//       result.push(current.val);
//       if (current.right) stack.push(current.right);
//       if (current.left) stack.push(current.left);
//    }
//    return result;
// };

// Using recursion
const depthFirstValues = (start) => {
   if (!start) return [];
   const leftValues = depthFirstValues(start.left);
   const rightValues = depthFirstValues(start.right);

   return [start.val, ...leftValues, ...rightValues];
};
console.log(depthFirstValues(a));
["a", "b", "d", "e", "c", "f"];
