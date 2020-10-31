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
            return temp.val;
        }
    }

    shift() {
        // empty list
        if (this.length === 0) {
            return undefined; 
        } else {
             // sever head, reset head & return original
            let temp = this.head;
            this.head = this.head.next;
            this.length --;
            if (this.length === 0) {
                this.tail = null;
            }
            return temp;
        }
    }

    unshift(val) {
        // create new node with val
        let newNode = new Node(val);
        // if no head set head & tail to new node
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = this.head;
        // else set new node as head
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length ++;
        return this;
    }

    get(index) {
        // special cases
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.head;

        // traverse list
        let current = this.head
        for(let count=0; count<index; count++) {
            current = current.next;
        }
        return current;
    }

    set(index, val) {
        let reqNode = this.get(index);
        if (reqNode === undefined) return false;
        reqNode.val = val;
        return true;
    }

    insert(index, val) {
        // special cases
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val); // !! ensures true is returned
        if (index === this.length) return !!this.push(val); // !! ensures true is returned

        let previousNode = this.get(index - 1);
        let newNode = new Node(val);
        newNode.next = previousNode.next;
        previousNode.next = newNode;
        this.length ++;
        return true;
    }

    remove(index) {
        // special cases
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift(index).val; 
        if (index === this.length - 1) return this.pop().val; 

        let previousNode = this.get(index - 1);
        let removedNode = previousNode.next;
        previousNode.next = removedNode.next;
        this.length --;
        return removedNode;
    }

    reverse() {
        let oldTail = this.tail;
        this.tail = this.head;
        let currentNode = this.tail;
        let nextNode = currentNode.next;
        while (nextNode != oldTail) {
            let temp = nextNode.next;
            nextNode.next = currentNode;
            currentNode = nextNode;
            nextNode = temp;
        }
        nextNode.next = currentNode;
        this.head = nextNode;
        this.tail.next = null;
        return this;
    }
}

let myList = new SinglyLinkedList()
myList.push(10);
myList.push(20);
myList.push(30);