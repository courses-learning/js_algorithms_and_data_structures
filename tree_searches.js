class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enQueue(newNode) {
        // add new node to end setup links first -> last
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


class bst {
    constructor() {
        this.root = null;
    }

    insert(val) {
    let node = new Node(val);
    // check if root exists
    switch (!this.root) {
        // no root so make new node root
        case true:
            this.root = node;
            break;
        // root exists
        case false:
            let current = this.root;
            let flag = false;
            // navigate tree until null found
            while (!flag) {
                // handle duplicates
                if (current.val === val) return undefined;
                // check node value against current
                switch (node.val > current.val) {
                    // its greater so check right & traverse branch
                    case true:
                        if (current.right) {
                            // right branch isn't null so traverse
                            current = current.right;
                        } else {
                            // right is null so set as the new node
                            current.right = node;
                            flag = true;
                        }
                        break;
                    // its false so check and traverse left branch
                    case false:
                        if (current.left) {
                            // left branch isn't null so traverse
                            current = current.left;
                        } else {
                            // left branch is null so set as new node
                            current.left = node;
                            flag = true;
                        }
                        break;
                }
            }
    }
    return this;
    }

    search(val) {
        // check if root exists
        switch (!this.root) {
            // no root so not found
            case true:
                return false;
            // root exists
            case false:
                let current = this.root;
                let flag = false;
                // navigate tree until null or val found
                while (!flag) {
                    // found
                    if (current.val === val) return true;
                    // check node value against current
                    switch (val > current.val) {
                        // its greater so check right & traverse branch
                        case true:
                            if (current.right) {
                                // right branch isn't null so traverse
                                current = current.right;
                            } else {
                                // right is null so not found
                                return false;
                            }
                            break;
                        // its false so check and traverse left branch
                        case false:
                            if (current.left) {
                                // left branch isn't null so traverse
                                current = current.left;
                            } else {
                                // left branch is null so not found
                                return false;
                            }
                            break;
                    }
                }
        }
    }

    // breadth first search
    BFSearch(val) {
        let searchQueue = new Queue;
        let visited = [];
        let current;
        searchQueue.enQueue(this.root);
        while (searchQueue.size > 0) {
            current = searchQueue.deQueue();
            if (current.left) searchQueue.enQueue(current.left);
            if (current.right) searchQueue.enQueue(current.right);
            visited.push(current.val);
        }
        return visited;
    }

    // depth first (pre-order) search
    DFSPreOrder(val) {
        let visited = [];
        this.DFSHelper(this.root, visited, 'preorder');
        return visited;
    }

    // depth first (post-order) search
    DFSPostOrder(val) {
        let visited = [];
        this.DFSHelper(this.root, visited, 'postorder');
        return visited;
    }

    DFSInOrder(val) {
        let visited = [];
        this.DFSHelper(this.root, visited, 'inorder');
        return visited;
    }

    // depth first search recursive helper function to add against list of nodes visited
    DFSHelper(node, visited, search) {
        if (search === 'preorder') visited.push(node.val);
        if (node.left) this.DFSHelper(node.left, visited, search);
        if (search === 'inorder') visited.push(node.val);
        if (node.right) this.DFSHelper(node.right, visited, search);
        if (search === 'postorder') visited.push(node.val);
        return visited;
    }
}


// build a tree
let tree = new bst();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(11);
tree.insert(9);
tree.insert(1);
tree.insert(20);
tree.insert(17);

// execute each search
console.log(`Breadth First Search: ${tree.BFSearch(20)}`);
console.log(`Depth First(preOrder): ${tree.DFSPreOrder(20)}`);
console.log(`Depth First(postOrder): ${tree.DFSPostOrder(20)}`);
console.log(`Depth First(inOrder): ${tree.DFSInOrder(20)}`);

