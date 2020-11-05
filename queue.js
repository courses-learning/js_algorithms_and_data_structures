class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enQueue(val) {
        // add new node to end setup links first -> last
        let newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size ++;
        return this;
    }

    deQueue() {
        // remove first node
        if (this.size === 0) return null;
        let deQueuedNode = this.first;
        if (this.size === 1) this.last = null;
        this.first = this.first.next;
        this.size --;
        deQueuedNode.next = null;
        return deQueuedNode;
    }
}

let queue = new Queue()
queue.enQueue(10);
queue.enQueue(20);
queue.enQueue(30);