//Bicoloring Graph
var Node = {
    name: '',
    parent: undefined,
    totalCost: Number.POSITIVE_INFINITY,
    visited: false
}

var Graph = {
    noOfNode: 0,
    myMap: new Map(),
    nodes: new Map(),
    initNodes: function () {
        for(let i = 1; i <= this.noOfNode; i += 1){
            this.nodes.set(i, Object.assign({},Node, {name: i}))
        }
    },
    addEdge: function(node1, node2, pathCost) {
        if(this.myMap.get(node1) == undefined){
            this.myMap.set(node1, [{pathCost, node: this.nodes.get(node2)}]);
        }else{
            this.myMap.get(node1).push({pathCost, node: this.nodes.get(node2)});
        }
        
        if(this.myMap.get(node2) == undefined){
            this.myMap.set(node2, [{pathCost, node: this.nodes.get(node1)}]);
        }else{
            this.myMap.get(node2).push({pathCost, node: this.nodes.get(node1)});
        }
    },
    getPathCost: function(startNode, endNode){
        adjacencyList = this.myMap.get(startNode);
        for(let i = 0; i < adjacencyList.length; i += 1){
            if(adjacencyList[i].node.name == endNode){
                return adjacencyList[i].pathCost;
            }
        }
    }
}

const dijkstraShortestPath = function(graph, startingNode){
    
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

console.log(myGraph.myMap);