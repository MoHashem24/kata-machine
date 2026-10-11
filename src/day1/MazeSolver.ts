// const dir = [
//     [-1, 0], //down
//     [1, 0], //up
//     [0, -1], //left
//     [0, 1], //right
// ];

// function walk(
//     maze: string[],
//     wall: string,
//     curr: Point,
//     end: Point,
//     seen: boolean[][],
//     path: Point[],
// ): boolean {
//     // 1. Base case
//     // Off the map
//     if (
//         curr.y >= maze.length ||
//         curr.x >= maze[0].length ||
//         curr.y < 0 ||
//         curr.x < 0
//     )
//         return false;
//     if (maze[curr.y][curr.x] === wall) return false;
//     // not seen before
//     if (seen[curr.y][curr.x]) return false;
//     // is end
//     if (curr.x === end.x && curr.y === end.y) {
//         path.push(end);
//         return true;
//     }
//     // 3 recurse
//     // pre

//     seen[curr.y][curr.x] = true;
//     path.push(curr);
//     //recurse
//     for (let i = 0; i < dir.length; i++) {
//         const [x, y] = dir[i];
//         if (
//             walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)
//         ) {
//             path.push(curr);
//             return true;
//         }
//     }
//     //     The post stage is reached when:

//     // We have explored all four directions, and none lead to the destination.
//     // In this case, we need to backtrack by removing (pop) the current cell from path.
//     //post
//     path.pop(); // not wall not at end and all directions return false; so pop it out
//     return false;
// }
// export default function solve(
//     maze: string[],
//     wall: string,
//     start: Point,
//     end: Point,
// ): Point[] {
//     let seen: boolean[][] = [];
//     const path: Point[] = [];

//     for (let i = 0; i < maze.length; i++) {
//         //undefined like false not needed here
//         seen.push(new Array(maze[0].length).fill(false));
//     }
//     walk(maze, wall, start, end, seen, path); // start is current which is different everytime

//     return path;
// }
export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const path: Point[] = [];
    let seen: boolean[][] = [];
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    function walk(curr: Point): boolean {
        if (
            curr.y >= maze.length ||
            curr.x >= maze[0].length ||
            curr.y < 0 ||
            curr.x < 0
        )
            return false;

        //base case

        // if we have seen it before
        if (seen[curr.y][curr.x]) return false;
        seen[curr.y][curr.x] = true;

        //it is a wall
        if (maze[curr.y][curr.x] === wall) return false;

        // the END :)
        path.push({ x: curr.x, y: curr.y });
        if (curr.x === end.x && curr.y === end.y) return true;
        if (walk({ x: curr.x - 1, y: curr.y })) return true; //<=
        if (walk({ x: curr.x + 1, y: curr.y })) return true; //=>
        if (walk({ x: curr.x, y: curr.y - 1 })) return true; //V
        if (walk({ x: curr.x, y: curr.y + 1 })) return true; //^
        // if all four directions return false then we need to backtrack by removing (pop) the current cell from path.
        path.pop();
        return false;
    }
    //if a direction returns true

    walk(start);

    return path;
}
//file:///C:/Users/Future/Downloads/projects/kata-machine/maze-backtracking.html
