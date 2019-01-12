//unweighted graph - BFS
var Node = {
    parent: undefined,
    level: Number.POSITIVE_INFINITY,
    name: ''
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
    addEdge: function(node1, node2) {
        if(this.myMap.get(node1) === undefined){
            this.myMap.set(node1, [this.nodes.get(node2)]);
        }else{
            this.myMap.get(node1).push(this.nodes.get(node2));
        }
        
        if(this.myMap.get(node2) === undefined){
            this.myMap.set(node2, [this.nodes.get(node1)]);
        }else{
            this.myMap.get(node2).push(this.nodes.get(node1));
        }
    },
    printPath: function (endNode){
        let node = this.nodes.get(endNode);
        let resultPath = [];
        resultPath.push(node.name);
        while(node.parent != undefined){
            node = this.nodes.get(node.parent);
            resultPath.push(node.name);
        }
        resultPath.reverse();
        console.log(resultPath);
    }
}

const bfs = function(graph, startingNode){
    let queue = [];
    let node = graph.nodes.get(startingNode);
    node.level = 0;
    queue.push(node);
    while(queue.length > 0){
        let popNode = queue.shift();
        graph.myMap.get(popNode.name).map(endNode => {
            if(endNode.level == Number.POSITIVE_INFINITY){
                endNode.parent = popNode.name;
                endNode.level = popNode.level + 1;
                queue.push(endNode);
            }
        })
    }
}

myGraph = Object.assign({}, Graph);
myGraph.noOfNode = 10;
myGraph.initNodes();

myGraph.addEdge(1,2);
myGraph.addEdge(1,3);
myGraph.addEdge(1,4);
myGraph.addEdge(2,3);
myGraph.addEdge(2,5);
myGraph.addEdge(2,6);
myGraph.addEdge(3,6);
myGraph.addEdge(5,6);
myGraph.addEdge(7,4);
myGraph.addEdge(7,8);
myGraph.addEdge(8,4);
myGraph.addEdge(7,9);
myGraph.addEdge(8,10);
myGraph.addEdge(9,10);
myGraph.addEdge(7,10);

bfs(myGraph, 1);
myGraph.printPath(10);