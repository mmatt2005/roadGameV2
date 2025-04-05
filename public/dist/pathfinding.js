import { lineManager } from "./main.js";
export function getNeighborNodes(node) {
    let neighbors = [];
    lineManager.lines.forEach((line) => {
        if (line.point1.id === node.id) {
            neighbors.push(line.point2);
        }
        else if (line.point2.id === node.id) {
            neighbors.push(line.point1);
        }
    });
    return neighbors;
}
export function getPath(startingPoint, endingPoint) {
    let queue = [];
    let visited = new Set();
    // Map to track the parent of each node
    let cameFrom = new Map();
    queue.push(startingPoint);
    cameFrom.set(startingPoint, null); // Starting point has no parent
    while (queue.length > 0) {
        const currentNode = queue.shift();
        if (!currentNode)
            return console.log("No current node"), [];
        if (currentNode === endingPoint) {
            console.log("FOUND!!!!");
            // Reconstruct the path
            let path = [];
            let current = currentNode;
            while (current !== null) {
                path.unshift(current);
                current = cameFrom.get(current) || null;
            }
            console.log("Path:", path);
            return path;
        }
        if (!visited.has(currentNode)) {
            visited.add(currentNode);
            for (let neighbor of getNeighborNodes(currentNode)) {
                if (!visited.has(neighbor) && !cameFrom.has(neighbor)) {
                    queue.push(neighbor);
                    cameFrom.set(neighbor, currentNode); // Track the parent
                }
            }
        }
    }
    console.log("No path found.");
    return [];
}
