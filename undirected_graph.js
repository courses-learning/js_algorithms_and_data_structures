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

    DFSRecursive(startNode) {
        let result = [];
        let visited = {};
        // line required as meaning of this changes in helper DFS func
        let adjacencyList = this.adjacencyList;
        function DFS (node) {
            if (!node) return null;
            if (!visited[node]) {
                visited[node] = true;
                result.push(node);
            }
            for (let item of adjacencyList[node]) {
                if (!visited[item]) DFS(item);
            }
            return null;
        }
        DFS(startNode);
        return result;
    }
}

let g = new UndirectedGraph;
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

let loc = new UndirectedGraph;
loc.addVertex('Paris');
loc.addVertex('London');
loc.addVertex('Barcelona');
loc.addEdge('Paris', 'London');
loc.addEdge('Paris', 'Barcelona');
