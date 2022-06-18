// Implementing the exercism double linked list problem

class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
   }
}

class LinkedList {
   constructor() {
      this.head = null;
      this.length = 0;
   }

   count() {
      return this.length;
   }

   // implementing the push method;
   push(value) {
      const node = new Node(value);
      let currentNode = this.head;

      if (currentNode === null) {
         this.head = node;
      } else {
         while (currentNode.next) {
            currentNode = currentNode.next;
         }
         currentNode.next = node;
         node.prev = currentNode;
      }
      this.length++;
   }

   // implementing the pop() method
   pop() {
      const last = this.getAt(this.length - 1);
      this.removeAt(this.length - 1);
      return last;
   }

   // implementing the unshift() method
   unshift(value) {
      this.insertAt(value, 0);
   }

   // implementing the shift() method;
   shift() {
      const first = this.getAt(0);
      this.removeAt(0);
      return first;
   }
   // these are helper functions that will help us implement some of the functionality
   delete(value) {
      if (this.includes(value)) {
         let count = 0;
         while (true) {
            let element = this.getAt(count);
            if (element === value) {
               this.removeAt(count);
               break;
            }
            count++;
         }
      } else {
         return `value ${value} does not exist in the list`;
      }
   }

   removeAt(index) {
      let currentNode = this.head;
      let currentIndex = 0;

      if (index < 0 && index > this.length) return false;
      if (index === 0) this.head = currentNode.next;

      while (currentIndex < index) {
         currentIndex++;
         currentNode.prev = currentNode;
         currentNode = currentNode.next;
      }

      currentNode.prev = currentNode.next;
      this.length--;
   }

   getAt(index) {
      let currentNode = this.head;
      if (index < 0 || index > this.length) {
         return "Index value given is invalid";
      } else if (index === 0) {
         return currentNode.value;
      } else {
         let count = 0;
         while (count < index) {
            count++;
            currentNode = currentNode.next;
         }
         return currentNode.value;
      }
   }

   insertAt(value, index) {
      const node = new Node(value);
      let currentNode = this.head;

      if (index < 0 || index > this.length) {
         return "Index value given is invalid";
      } else if (index === 0) {
         this.head = node;
         node.next = currentNode;
      } else {
         let count = 0;
         while (count < index) {
            count++;
            currentNode.prev = currentNode;
            currentNode = currentNode.next;
         }
         currentNode.prev.next = node;
         node.next = currentNode;
      }
      this.length++;
   }

   includes(value) {
      let current = this.head;
      let count = 0;
      let result = false;
      while (count < this.length) {
         count++;
         if (current.value === value) result = true;
         current = current.next;
      }
      return result;
   }
}
