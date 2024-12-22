import MinHeapGraph from "./MinHeapGraph";

export default function dijkstra_min_heap(
    source: number,
    sink: number,
    graph: WeightedAdjacencyList,
): number[] | null {
    const path: number[] = new Array(graph.length).fill(-1);
    const dists: number[] = new Array(graph.length).fill(Infinity);
    const heap: MinHeapGraph = new MinHeapGraph();
    //set source distance 0 and seen
    dists[source] = 0;
    heap.insert({ to: source, weight: 0 });

    // The min-heap will handle inserting nodes correctly from lower to higher distances
    while (heap.length > 0) {
        // hashUnvisitedEdge and getLowesUnvisitedEdge not needed
        // Extract the node with the smallest distance from the heap
        const lowestUnvisitedEdge = heap.delete();
        const lowestUnvisitedEdgeIndex = lowestUnvisitedEdge?.to as number;
// no need use seen array to know if pathed it or not as will directly get min and realocate
        // Get all edges connected to this node
        const edges: GraphEdge[] = graph[lowestUnvisitedEdgeIndex];

        // Iterate over all edges connected to this node
        for (let i = 0; i < edges.length; i++) {
            const edge = edges[i];
            const dist = edge.weight + dists[lowestUnvisitedEdgeIndex];

            // If a shorter path is found, update the distance and path, and insert the edge into the heap
            if (dist < dists[edge.to]) {
                dists[edge.to] = dist;
                path[edge.to] = lowestUnvisitedEdgeIndex;
                heap.insert({ to: edge.to, weight: dist });
            }
        }
    }
    debugger;
    if (path[sink] === -1) return null; //no path as in path index stays same
    const out: number[] = [];
    let curr = sink;
    while (curr !== source) {
        out.unshift(curr);
        curr = path[curr];
        //from need to source
    }

    return [source].concat(out);
}