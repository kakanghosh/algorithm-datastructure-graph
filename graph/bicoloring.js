//Bicoloring Graph
var Node = {
    name: '',
    color: undefined
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
    }
}

const bicolor = function(graph, startingNode){
    let queue = [];
    let node = graph.nodes.get(startingNode);
    node.color = 'red';
    queue.push(node);
    while(queue.length > 0){
        let popNode = queue.shift();
        let nodes = graph.myMap.get(popNode.name);
        for(let i = 0; i < nodes.length; i += 1){
            let endNode = nodes[i];
            if(endNode.color == undefined){
                if(popNode.color == 'red'){
                    endNode.color = 'green'
                }else {
                    endNode.color = 'red'
                }
                queue.push(endNode);
            }else if(popNode.color == endNode.color){
                return false;
            }
        }
    }
    return true;
}

myGraph = Object.assign({}, Graph);
myGraph.noOfNode = 5;
myGraph.initNodes();

// myGraph.addEdge(1,2);
// myGraph.addEdge(1,3);
// myGraph.addEdge(1,4);
// myGraph.addEdge(2,3);
// myGraph.addEdge(2,5);
// myGraph.addEdge(2,6);
// myGraph.addEdge(3,6);
// myGraph.addEdge(5,6);
// myGraph.addEdge(7,4);
// myGraph.addEdge(7,8);
// myGraph.addEdge(8,4);
// myGraph.addEdge(7,9);
// myGraph.addEdge(8,10);
// myGraph.addEdge(9,10);
// myGraph.addEdge(7,10);

myGraph.addEdge(1,2);
myGraph.addEdge(1,3);
myGraph.addEdge(2,4);
myGraph.addEdge(2,5);
myGraph.addEdge(3,4);
myGraph.addEdge(3,5);


let result = bicolor(myGraph, 1);
console.log(result);