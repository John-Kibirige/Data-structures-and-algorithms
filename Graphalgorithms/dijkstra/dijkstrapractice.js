const nodes = new Map();
nodes.set("S", { A: 7, B: 2, C: 3 });
nodes.set("A", { B: 3, D: 4 });
nodes.set("B", { D: 4, H: 1 });
nodes.set("D", { F: 5 });
nodes.set("F", { H: 3 });
nodes.set("H", { G: 2 });
nodes.set("G", { E: 2 });
nodes.set("C", { L: 2 });
nodes.set("L", { I: 4, J: 4 });
nodes.set("I", { J: 6, K: 4 });
nodes.set("J", { K: 4 });
nodes.set("K", { E: 5 });
nodes.set("E", null);

// this is in the sense that the node with null values is the last node or destination node in our traversal
