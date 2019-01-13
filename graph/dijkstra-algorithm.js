//Bicoloring Graph
var Node = {
    name: '',
    parent: undefined,
    cost: Number.POSITIVE_INFINITY,
    visited: false
}

var Graph = {
    noOfNode: 0,
    adcencyList: new Map(),
    nodes: new Map(),
    initNodes: function () {
        for(let i = 1; i <= this.noOfNode; i += 1){
            this.nodes.set(i, Object.assign({},Node, {name: i}))
        }
    },
    addEdge: function(node1, node2, pathCost) {
        if(this.adcencyList.get(node1) == undefined){
            this.adcencyList.set(node1, [{pathCost, node: this.nodes.get(node2)}]);
        }else{
            this.adcencyList.get(node1).push({pathCost, node: this.nodes.get(node2)});
        }
        
        if(this.adcencyList.get(node2) == undefined){
            this.adcencyList.set(node2, [{pathCost, node: this.nodes.get(node1)}]);
        }else{
            this.adcencyList.get(node2).push({pathCost, node: this.nodes.get(node1)});
        }
    },
    getPathCost: function(startNode, endNode){
        adjacencyList = this.adcencyList.get(startNode);
        for(let i = 0; i < adjacencyList.length; i += 1){
            if(adjacencyList[i].node.name == endNode){
                return adjacencyList[i].pathCost;
            }
        }
    },
    pathRelax: function(node, cost){
        this.nodes.get(node).cost = cost;
    } 
}

class Priority_Queue{
    constructor(){
        this.queue = []
    }
    insert(node){
        this.queue.push(node);
    }
    pop(){
        let index = 0;
        let minimumNode = this.queue[index];
        for(let i = 1; i < this.queue.length; i += 1){
            if (this.queue[i].cost < minimumNode.cost){
                index = i;
                minimumNode = this.queue[i];
            }
        }
        this.queue.splice(index, 1);
        return minimumNode;
    }
    isEmpty(){
        return this.queue.length == 0 ? true : false;
    }
}

const dijkstraShortestPath = function(graph, startingNode){
    pQueue = new Priority_Queue();
    let node = graph.nodes.get(startingNode);
    node.cost = 0;
    pQueue.insert(node);
    while(!pQueue.isEmpty()){
        let node = pQueue.pop();
        graph.adcencyList.get(node.name).map(adjacentNode => {
            if(adjacentNode.node.cost > (adjacentNode.pathCost + node.cost)){
                myGraph.pathRelax(adjacentNode.node.name, adjacentNode.pathCost + node.cost);
                adjacentNode.node.parent = node.name
                pQueue.insert(adjacentNode.node);
            }
        })
    }
}

myGraph = Object.assign({}, Graph);
myGraph.noOfNode = 10;
myGraph.initNodes();

myGraph.addEdge(1,2,5);
myGraph.addEdge(1,3,3);
myGraph.addEdge(1,4,4);
myGraph.addEdge(2,3,2);
myGraph.addEdge(2,5,3);
myGraph.addEdge(2,6,4);
myGraph.addEdge(3,6,1);
myGraph.addEdge(5,6,2);
myGraph.addEdge(7,4,6);
myGraph.addEdge(7,8,2);
myGraph.addEdge(8,4,2);
myGraph.addEdge(7,9,4);
myGraph.addEdge(8,10,1);
myGraph.addEdge(9,10,5);
myGraph.addEdge(7,10,3);

dijkstraShortestPath(myGraph, 1);
console.log(myGraph.nodes);