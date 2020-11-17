class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
        this.time = Date.now();
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        // create node
        let node = new Node(val, priority)
        // add val to end of list
        this.values.push(node);
        // handle empty list - e.g. new val becomes head/root
        if (this.values.length < 2) return this.values;
        // get indices of node and its parent
        let index = this.values.length - 1;
        let parentIndex = Math.floor((index - 1) / 2)

        // bubble value up through heap swapping val with parent when its bigger
        while (this.values[index].priority < this.values[parentIndex].priority) {
            [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2)
            // node is now head of heap so break out of loop
            if (index === 0) break;
        }
        return this.values;
    }

    dequeue() {
        // swap first and last elements and pop max value (initial root)
        const last = this.values.length - 1;
        [this.values[0], this.values[last]] = [this.values[last], this.values[0]];
        const extracted = this.values.pop();

        // single element in heap
        if (last === 0) return extracted;

        let parentIndex = 0;
        
        while (true) {
            let leftChild = parentIndex * 2 + 1;
            let rightChild = parentIndex * 2 + 2;
            let swap = null;
            // check left child exists and priority is higher or equal than parent (n.b 1 is highest priority)
            if (leftChild < this.values.length && this.values[leftChild].priority <= this.values[parentIndex].priority) {
                // left child is greater or same so store potential swap (will have been in queue longer if the same)
                swap = leftChild;
            }
            // check right child exists and priority is higher or equal than parent
            if (rightChild < this.values.length && this.values[rightChild].priority <= this.values[parentIndex].priority) {
                if (swap) {
                    
                    // // there was a swap on left comparison - handle same priorities by checking which queued longest
                    if (this.values[leftChild].priority === this.values[rightChild].priority) {
                        swap = (this.values[leftChild].time < this.values[rightChild].time) ? leftChild : rightChild;
                    } else {
                        // there was a swap on left comparison - different children priorities so compare and store largest in swap
                        swap = (this.values[leftChild].priority < this.values[rightChild].priority) ? leftChild : rightChild;
                    }
                
                } else {
                    // no previous swap but rightChild is greater than parent so store swap
                    swap = rightChild;
                }
            }
            // no swap so return extracted
            if (!swap) return extracted;
            // action the identified swap
            [this.values[parentIndex], this.values[swap]] = [this.values[swap], this.values[parentIndex]];
            // change parentIndex to new position
            parentIndex = swap;
        } 
    }
}


let ER = new PriorityQueue();

// test data giving different time properties
setTimeout(() => {
    ER.enqueue('headache', 3)
}, 1000);

setTimeout(() => {
    ER.enqueue('concusion', 2)
}, 2000)

setTimeout(() => {
    ER.enqueue('vomiting', 2)
}, 3000)

setTimeout(() => {
    ER.enqueue('heartattack', 1)
}, 4000)

setTimeout(() => {
    ER.enqueue('broken arm', 2)
}, 5000)
