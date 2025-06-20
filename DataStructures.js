
//-------------------- Data Structures Courses [     Stack      ]


class Stack {
    constructor() {
        this.items = []; // array n7o6 fiha element nta3 stack
        this.count = 0;
    }
    push(element) {
        this.items[this.count] = element;
        console.log(`Push is ${element} in index ${this.count}`);
        this.count++;
    }
    pop() {
        if (this.count == 0) return;
        let removedElement = this.items[this.count - 1];
        this.count--;
        console.log(`Element removed is  ${removedElement}`);
    }
    isEmpty() {
        if (this.items.length === 0) {
            console.log('is empty')
        } else {
            console.log('no empty')
        }
    }
    length() {
        console.log(this.count);
    }
}
const stack = new Stack();
// stack.isEmpty();
// stack.push(5);stack.push(4);stack.push(3);stack.push(2);
// stack.isEmpty()
// stack.length();

/* ============== Exercice of Stack ==============*/


function isValide(s) {
    let stack = [];
    const obj = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        if (obj[curr]) {
            stack.push(obj[curr]);
        } else {
            if (curr !== stack.pop()) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

//console.log(isValide('(){}[]'));


class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push(element) {
        this.stack.push(element);
        if (this.minStack.length === 0 || element <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(element);
        }
        return element;
    }
    pop() {
        let removed = this.stack.pop();
        if (removed === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }
    peek() {
        if (this.stack.length === 0) {
            return null
        } else {
            return this.stack[this.stack.length - 1];
        }
    }
    getMin() {
        if (this.minStack.length === 0) {
            return null;
        } else {
            return this.minStack[this.minStack.length - 1];
        }
    }

}
//  const obj = new MinStack();
//  console.log(obj.peek());
//  obj.push(5);
//  obj.push(8);
//  obj.push(2);
//  obj.push(6);
//  obj.push(4);
//  console.log(obj.peek())
//  console.log(`The minimum value in stack is ${obj.getMin()}`)


//-------------------- Data Structures Courses [     Linked list      ]

//Create Class Node 
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
//Create Class linkedList 
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    getData() {
        const values = [];
        let current = this.head;
        while (current !== null) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

}
// const linkedList = new LinkedList();
// linkedList.append(9);
// linkedList.append(8);
// linkedList.append(8);
// linkedList.append(8);
// linkedList.append(12);
// linkedList.prepend(7); 
// linkedList.reverse();
// console.log(linkedList.getData());
// console.log(linkedList);


//-------------------- Data Structures Courses [     Queue      ]

class Queue {
    constructor() {
        this.items = [];
        this.count = 0;
    }
    enqueue(element) {
        this.items.push(element);
        this.count++;
    }
    dequeue() {
        if (this.items.length === 0) {
            return null;
        } else {
            this.items.shift();
        }
    }
    peek() {
        let i = 0;
        return this.items[i];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        const size = this.items.length;
        console.log(`Size of queue is ${size}`)
    }
    printQueue() {
        return this.items.join(' - ');
    }
}
// const   queue = new Queue();
// queue.enqueue(5);
// queue.enqueue(4);
// queue.enqueue(3);
// queue.enqueue(2);
// queue.enqueue(1);
// queue.dequeue();
// console.log(queue.peek())
// console.log(queue.isEmpty())
// queue.size()
// console.log(queue.printQueue())

