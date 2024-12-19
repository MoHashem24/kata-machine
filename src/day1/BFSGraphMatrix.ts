export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const length = graph[0].length;
    const seen: boolean[] = new Array<false>(length).fill(false);
    const path: number[] = new Array<number>(length).fill(-1);
    //start from current and check edges  graph[curr/source][n] if not 0 then there is a path and if curr is needle then return path
    //then add current and reverse it so current is last
    const queue: number[] = [source];
    seen[source] = true;
    while (queue.length > 0) {
        const curr = queue.shift() as number;
        if (curr === needle) continue;
        const edges = graph[curr];
        for (let i = 0; i < edges.length; i++) {
            const edge = edges[i];
            if (edge == 0) continue;
            if (seen[i]) continue;
            seen[i] = true;
            path[i] = curr;//path[i] index needle will be iterated as matrix 
            queue.push(i);
        }
    }
    if (path[needle] === -1) return null;
    let curr = needle;
    let out: number[] = [];
    while (curr !== source) {
        out.unshift(curr);
        curr = path[curr];
    }

    //unshift or use pop and .reverse()
    return [source].concat(out);
}
