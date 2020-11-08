class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
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
}

let tree = new bst();

