class MaxBinaryHeap {
    constructor() {
        this.values = [55, 39, 41, 18, 27, 12, 33];
    }

    insert(val) {
        // add val to end of list
        this.values.push(val);
        // handle empty list - e.g. new val becomes head/root
        if (this.values.length < 2) return this.values;
        // get indices of val and its parent
        let index = this.values.length - 1;
        let parentIndex = Math.floor((index - 1) / 2)

        // bubble value up through heap swapping val with parent when its bigger
        while (this.values[index] > this.values[parentIndex]) {
            [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2)
            // val is now head of heap so break out of loop
            if (index === 0) break;
        }
        return this.values;
    }

    extractMax() {
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
            // check left child exists and is greater than parent
            if (leftChild < this.values.length && this.values[leftChild] > this.values[parentIndex]) {
                // left child is greater so store potential swap
                swap = leftChild;
            }
            // check right child exists and is greater than parent
            if (rightChild < this.values.length && this.values[rightChild] > this.values[parentIndex]) {
                if (swap) {
                    // there was a swap on left comparison so compare 2x children and store largest in swap
                    swap = (this.values[leftChild] > this.values[rightChild]) ? leftChild : rightChild;
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
let heap = new MaxBinaryHeap();
