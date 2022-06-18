// In this adventure we shall implement the doubly linked list with key things put or bared in mind

function createNode(value) {
   return {
      value: value,
      prev: null,
      next: null,
   };
}

class LinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }

   //    creating the push() method

   push(value) {
      this.length++;
      let node = createNode(value);
      let current = this.tail;
      if (current) {
         current.next = node;
         node.prev = current;
         this.tail = node;
         return node;
      }
      this.head = this.tail = node;
      return node;
   }
   // pop() method
   pop() {
      if (this.tail) {
         this.length--;
         let current = this.tail;
         this.tail = current.prev;
         if (this.tail) {
            this.tail.next = null;
         } else {
            this.head = null;
         }
         return current.value;
      } else {
         return undefined;
      }
   }

   //    unshift() method
   unshift(value) {
      this.length++;
      const node = createNode(value);
      if (this.head) {
         node.next = current;
         current.prev = node;
         // the head will therefore change to a new one;
         this.head = node;
         return node;
      }
      this.head = this.tail = node;
      return node;
   }

   //    the shift() method;
   shift() {
      if (this.head) {
         this.length--;
         let current = this.head;
         this.head = current.next;
         if (this.head) {
            this.head.prev = null;
         } else {
            this.tail = null;
         }
         return current;
      } else {
         return undefined;
      }
   }

   //    delete(value);
   delete(value) {
      if (this.includes(value)) {
         let current = this.head;
         if (this.indexOf(value) === 0) {
            this.shift();
         } else if (this.indexOf(value) === this.length - 1) {
            this.pop();
         } else {
            if (current) {
               while (current) {
                  if (current.value === value) {
                     current?.prev.next = current.next;
                     current.next.prev = current.prev;
                     break;
                  }
                  current = current.next;
               }
               this.length--;
            }
         }
      }
   }

   // another helper fucntion : inlcludes
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

   // indexOf helper function
   indexOf(value) {
      if (this.includes(value)) {
         let current = this.head;
         let count = 0;
         while (current?.value !== value) {
            count++;
            current = current.next;
         }
         return count - 1;
      }
      return -1;
   }

   //    implementing the print() method that will output the values of the linked list
   print() {
      let current = this.head;
      while (current) {
         console.log(
            `prev: ${current.prev?.value} curr: ${current.value}  next: ${current.next?.value}`
         );
         current = current.next;
      }
   }

   count(){
      return this.length;
   }
}

// 1. Get ready for your workday. Our brains are programmed in a way that takes cues from our social and personal outlook while making a decision. When you dress up for your work, you give the brain a reason for doing it. It’s like a natural alarm that can keep you alert throughout the day.
// 2. Choose a proper home office. As much as home working is convenient for many as they can coop up in their bed or couch, it becomes challenging to resist the temptation of sleep with our not-so-healthy sleep routine. A dedicated workspace will enable you to keep yourself oriented to your work by providing an office-esque environment.
// 3. Maintain consistent working hours. When your mind is completely onto work, it is quite possible for you to be unaware of the amount of time that has passed. If you plan on working for 8 hours straight on a workday, from 10 am to 6 pm, make sure you stick to your schedule.
// 4. Eat & sleep right. One of the perks of working from home is free access to the kitchen. As soon as it is time for breaks, you gravitate towards it to grab some snacks. This practice does not benefit you, in any way. Being on a healthy diet is very essential when you are a working person. 
// 5. Set a morning & evening routine. Work on your sleep schedule, meditate and exercise regularly. 
// 6. Prepare a to-do list/planner. Creating a to-do list would allow you to keep track of your progress efficiently. 
// 7. Music can boost your productivity! Listen to your favorite playlists or music radios and stay focused.
