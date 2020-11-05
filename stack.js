class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.size === 0) this.last = newNode;
        newNode.next = this.first;
        this.first = newNode;
        this.size ++;
        return this;
    }
    pop() {
        let poppedNode = this.first;
        if (this.size === 0) return null;
        if (this.size === 1) {
            this.first = null;
            this.tail = null;
        } else {
            this.first = poppedNode.next;
        }
        this.size --;
        poppedNode.next = null;
        return poppedNode;
    }
}

let stack = new Stack()
stack.push(10);
stack.push(20);
stack.push(30);