// so close to maze solve
function walk(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
    seen: boolean[],
    path: number[],
): boolean {
    //curr/source here to choose row so  proceed with all columns and curr is edge.to
    // calculate edge too and explain
    // 1. Base case
    if (seen[source]) {
        return false;
    }
    seen[source] = true;

    path.push(source);
    if (source === needle) {
        return true;
    }

    for (let i = 0; i < graph[source].length; i++) {
        const edge = graph[source][i];
        if (!!walk(graph,edge.to, needle, seen, path)) {
            // path.push(needle); no need as we are pushing source on init 
            return true;
        }
    }
    path.pop();
    return false;
}

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const path: number[] = [];
    const seen: boolean[] = new Array(graph.length).fill(false); //as if not filled then cant access it and set items
    
    walk(graph, source, needle, seen, path);
    if (path.length === 0) {
        return null
      }
    return path;
}
