class UndirectedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex (vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            return 0;
        }
        return 1;
    }

    addEdge (vertex1, vertex2) {
        if (!(vertex1 in this.adjacencyList) || (!(vertex2 in this.adjacencyList))) {
            console.log('Error - invalid vertex');
            return 1;
        } else {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return 0;
        }
    }

    removeEdge (vertex1, vertex2) {
        if (!(vertex1 in this.adjacencyList) || (!(vertex2 in this.adjacencyList))) {
            console.log('Error - invalid vertex');
            return 1;
        } else {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(item => item !== vertex2)
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(item => item !== vertex1)
            return 0;
        }
    }

    removeVertex (vertex) {
        for (let key in this.adjacencyList) {
            this.removeEdge(key, vertex);
        }
        delete this.adjacencyList[vertex];
        return 0;
    }
}

let a = new UndirectedGraph;
a.addVertex('Paris');
a.addVertex('London');
a.addVertex('Barcelona');
a.addEdge('Paris', 'London');
a.addEdge('Paris', 'Barcelona');
