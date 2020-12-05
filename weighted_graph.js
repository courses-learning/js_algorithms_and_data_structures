class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            return 0;
        }
        return 1;
    }

    addEdge(vertex1, vertex2, weight) {
        if (!(vertex1 in this.adjacencyList) || (!(vertex2 in this.adjacencyList))) {
            console.log('Error - invalid vertex');
            return 1;
        } else {
            this.adjacencyList[vertex1].push({node:vertex2, weight});
            this.adjacencyList[vertex2].push({node:vertex1, weight});
            return 0;
        }
    }

    dijkstra(startVertex, endVertex) {

        // error check that vertexs are in graph
        if (!(startVertex in this.adjacencyList) || (!(endVertex in this.adjacencyList))) {
            console.log('Error - invalid vertex');
            return 1;
        }

        function calcResult() {
            let path = [endVertex];
            let currentNode = endVertex;
            while (path[0] !== startVertex) {
                // POTENTIAL FOR SPEED UPGRADE BY REPLACING UNSHIFT
                path.unshift(previous[currentNode])
                currentNode = previous[currentNode];
            }
            console.log(`Shortest path is ${path.join(" --> ")}`);
            console.log(`Total distance: ${distances[endVertex]}`);
            return 0;
        }

        // INITIALISATION 
        // Create shortest distance table object & set start node=0
        let distances = {};
        distances[startVertex] = 0;

        // create priority queue
        let priorityQueue = new PriorityQueue();

        // create previous object
        let previous = {}
        
        // iterate over all nodes in graph/adjacency list
        for (let node in this.adjacencyList) {

            // create entry for each node in previous & set to null
            previous[node] = null;
            
            // set all nodes except start to infinity & load these to shortest distance table
            if (node !== startVertex) {
                distances[node] = Infinity;
            }

            // create entry for each node in priority queue based on values from shortest distance table
            // all will be infinity except start node=0 which is set to be first out
            priorityQueue.enqueue(node, distances[node]);
        }

        let current;
        let distanceStartToCurrentsNeighbour;
        let adjacencyList = this.adjacencyList;

        // ALGORITHM - Loop while anything in priority queue
        while (priorityQueue.values.length > 0) {
            // Dequeue which gives smallest weighted
            current = priorityQueue.dequeue();

            // Node from priority queue is endVertex so complete
            if (current.val === endVertex) {
                calcResult(); 
                return 0;
            }

            // Iterate through current nodes neighbours in the graph
            for (let neighbour in adjacencyList[current.val]) {
                let currentsNeighbour = adjacencyList[current.val][neighbour];

                // Calculate distance from start to neighbour
                distanceStartToCurrentsNeighbour = currentsNeighbour.weight + distances[current.val];

                // Is calculated distance to this neighbour less than already recorded in shortest distance table?
                if (distances[currentsNeighbour.node] > distanceStartToCurrentsNeighbour) {
                    // yes so update distance table with new shortest
                    distances[currentsNeighbour.node] = distanceStartToCurrentsNeighbour
                    // update previous to show node accessed from
                    previous[currentsNeighbour.node] = current.val;
                    // enqueue to priority queue with total distance from start
                    priorityQueue.enqueue(currentsNeighbour.node, distanceStartToCurrentsNeighbour)
                }
            }
        }
    }   
}

// CAN BE UPGRADED FOR SPEED BY IMPLEMENTING BINARY HEAP INSTEAD OF BELOW
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    };

    dequeue() {
        return this.values.shift();
    };
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    };
}

let g = new WeightedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 2);
g.addEdge('B', 'E', 3);
g.addEdge('E', 'D', 3);
g.addEdge('E', 'F', 1);
g.addEdge('D', 'C', 2);
g.addEdge('D', 'F', 1);
g.addEdge('F', 'C', 4);