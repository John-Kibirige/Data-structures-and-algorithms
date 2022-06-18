// we create a node class for making our nodes
class Node {
   constructor(data) {
      this.data = data;
      this.next = null;
   }
}

// we then create a lnked list class as well
class LinkedList {
   constructor(head = null) {
      this.head = head;
   }

   size() {
      let count = 0;
      let node = this.head;
      while (node) {
         count++;
         node = node.next;
      }
      return count;
   }

   clear() {
      this.head = null;
   }

   getLast() {
      let lastNode = this.head;
      if (lastNode) {
         while (lastNode.next) {
            lastNode = lastNode.next;
         }
      }
      return lastNode;
   }
   getFirst() {
      return this.head;
   }
}

// Implementing this gives us
let node1 = new Node(3);
let node2 = new Node(5);
node1.next = node2;

let list = new LinkedList(node1);
console.log(list.head.data);
console.log(list.head.next.data);
