// defining the node class
class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

// defining the linked list class
class LinkedList {
   constructor() {
      this.head = null;
      this.length = 0;
   }

   getSize() {
      return length;
   }

   getFirsst() {
      return this.head;
   }

   add(value) {
      const node = new Node(value);
      if (this.head === null) {
         this.head = node;
      } else {
         let currentNode = this.head;
         while (currentNode.next) {
            currentNode = currentNode.next;
         }
         currentNode.next = node;
      }
      this.length++;
   }

   delete(val) {
      let currentNode = this.head;
      let previousNode;
      if (currentNode.value === val) {
         this.head = currentNode.next;
      } else {
         while (currentNode.value !== val) {
            previousNode = currentNode;
            currentNode = currentNode.next;
         }
         previousNode.next = currentNode.next;
      }
      this.length--;
   }

   indexOf(val) {
      let currentNode = this.head;
      let index = -1;

      while (currentNode) {
         index++;
         if (currentNode.value === val) {
            return index;
         }
         currentNode = currentNode.next;
      }
      return index;
   }

   // get element at a specified position
   getValue(index) {
      let currentNode = this.head;
      let count = 0;
      while (count < index) {
         count++;
         currentNode = currentNode.next;
      }
      return currentNode.value;
   }

   // insert element at an index
   insertValue(value, index) {
      let node = new Node(value);

      let currentNode = this.head;
      let previousNode;
      let currentIndex = 0;

      if (index > this.length) return false;

      if (index === 0) {
         node.next = currentNode;
         this.head = node;
      } else {
         while (currentIndex < index) {
            currentIndex++;
            previousNode = currentNode;
            currentNode = currentNode.next;
         }

         previousNode.next = node;
         node.next = currentNode;
      }
      this.length++;
   }

   // remove element at an index;
   removeAt(index) {
      let currentNode = this.head;
      let previousNode;
      let currentIndex = 0;

      if (index < 0 || index > this.length) return false;
      if (index === 0) {
         this.head = currentNode.next;
      } else {
         while (currentIndex < index) {
            currentIndex++;
            previousNode = currentNode;
            currentNode = currentNode.next;
         }
         previousNode.next = currentNode.next;
      }
      this.length--;
   }
}

// the testing process;
let list = new LinkedList();
list.add(6);
list.add(87);
console.log(list);
