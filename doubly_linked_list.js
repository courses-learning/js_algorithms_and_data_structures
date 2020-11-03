class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length ++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let popped = this.tail;
        // special case of 1 entry in list
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        // reset tail
        } else {
            this.tail = this.tail.previous;
            this.tail.next = null;
        }
        // remove popped nodes links back into list & return
        popped.previous = null;
        this.length --;
        return popped;
    }

    shift() {
        if (this.length === 0) return undefined;
        let shifted = this.head;
        // special case of 1 entry in list
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.previous = null;
        }
        shifted.next = null;
        this.length --;
        return shifted;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }
        this.length ++;
        return this;
    }

    get(index) {
        // check index within range of linked list
        if (index < 0 || index > this.length - 1) return null;

        // start from head
        if (index <= this.length / 2) {
            let currentIndex = 0;
            let currentNode = this.head;
            while (currentIndex != index) {
                currentIndex ++;
                currentNode = currentNode.next;
            }
            return currentNode;
    
        // start from tail
        } else {
            let currentIndex = this.length - 1;
            let currentNode = this.tail;
            while (currentIndex != index) {
                currentIndex --;
                currentNode = currentNode.previous;
            }
            return currentNode;
        }
    }

    set(index, val) {
        let reqNode = this.get(index)
        if (reqNode) {
            reqNode.val = val;
            return true;
        } else {
            return false;
        }
    }

    insert(index, val) {
        // check index within range of linked list
        if (index < 0 || index > this.length) return false;

        // push & unshift scenarios
        if (index === 0) return !!this.unshift(val); // !! turns to bool
        if (index === this.length) return !!this.push(val); // !! turns to bool

        // get node currently in position for insert
        let currentNode = this.get(index);
            
        // create mew node, make insertion and amend links
        let insertedNode = new Node(val)
        insertedNode.next = currentNode;
        insertedNode.previous = currentNode.previous;
        currentNode.previous.next = insertedNode;
        currentNode.previous = insertedNode;
        this.length ++;
        return true;
    }
    

    remove(index) {
        // check index within range of linked list
        if (index < 0 || index > this.length) return null;
        // edge cases
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        // get node to remove and re-set all links
        let removedNode = this.get(index)
        removedNode.previous.next = removedNode.next;
        removedNode.next.previous = removedNode.previous;
        removedNode.next = null;
        removedNode.previous = null;
        this.length --;
        return removedNode;
    }

    reverse() {
        let current = this.head;
        // swap each nodes previous & next's
        while (current) {
            let next = current.next;
            current.next = current.previous;
            current.previous = next;
            current = current.previous;
        }
        // swap head & tail
        let oldHead = this.head;
        this.head = this.tail;
        this.tail = oldHead;
        return true;
    }
}

let myList = new DoublyLinkedList()
myList.push(10);
myList.push(20);
myList.push(30);