export default function dijkstra_list(
    source: number,
    sink: number,
    graph: WeightedAdjacencyList,
): number[] | null {
    const path: number[] = new Array(graph.length).fill(-1);
    const seen: boolean[] = new Array(graph.length).fill(false);
    const dists: number[] = new Array(graph.length).fill(Infinity);
    //set source distance 0 and seen
    dists[source] = 0;
    //if there still node unvisted in graph then move
    while (hashUnvisitedEdge(dists, seen)) {
        //get lowest Unvisited edge
        const lowestUnvisitedEdgeIndex = getLowesUnvisitedEdge(dists, seen);
        seen[lowestUnvisitedEdgeIndex] = true;
        // if (lowest === -1) return null; //no case as has unvisted handle that from started
        //update distance and path if new distance is lower
        // debugger;
        const edges: GraphEdge[] = graph[lowestUnvisitedEdgeIndex];
        //iterate over all edges connected 
        for (let i = 0; i < edges.length; i++) {
            const edge = edges[i];
            //weight of edge + distance of current node
            const dist = edge.weight + dists[lowestUnvisitedEdgeIndex];
            if (dist < dists[edge.to]) {
                dists[edge.to] = dist;
                path[edge.to] = lowestUnvisitedEdgeIndex;
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
//get lowest Unvisited edge
//check if have unvisited edge
function hashUnvisitedEdge(dists: number[], seen: boolean[]): boolean {
    return seen.some((s, i) => !s && dists[i] < Infinity);
}
function getLowesUnvisitedEdge(dists: number[], seen: boolean[]): number {
    let minimumDistance = Infinity;
    let minIndex = -1;
    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) continue;

        if (minimumDistance > dists[i]) {
            minimumDistance = dists[i];
            minIndex = i;
        }
    }
    return minIndex;
}
