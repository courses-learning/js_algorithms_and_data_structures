class MaxBinaryHeap {
    constructor() {
        this.values = [];
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
}

let heap = new MaxBinaryHeap()
heap.insert(10);