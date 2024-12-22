import dijkstra_min_heap from "@code/DijkstraMinHeap";
import { list1 } from "./graph";
// import { MinHeapGraph1 } from "./graph";

test("dijkstra via adj list", function () {
    /// waht?
    // what..
    // what...
    expect(dijkstra_min_heap(0, 6, list1)).toEqual([0, 1, 4, 5, 6]);
});
