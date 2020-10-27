class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        // create new node with val
        let newNode = new Node(val);
        // if no head set head & tail to new node
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = this.head;
        // else set next property on tail to be new node and re-set tail property
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
        return this;
    }
    pop() {
        // empty list
        if (!this.head) {
            return undefined;
        // single element in list
        } else if (this.head.next === null) {
            let temp = this.head;
            this.head = null;
            this.tail = null;
            return temp;
        } else {
            // find 2nd last node
            let current = this.head.next;
            while (current.next !== this.tail) {
                current = current.next;
            }
            // set 2nd to last as tail, decrease length by 1 and return last value
            let temp = current.next;
            current.next = null;
            this.tail = current;
            this.length --;
            return temp;
        }
    }
}


var list = new SinglyLinkedList()