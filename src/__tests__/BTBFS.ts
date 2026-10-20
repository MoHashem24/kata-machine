import bfs from "@code/BTBFS";
import { tree } from "./tree";

describe("Binary Tree BFS", () => {
  test("returns true when the target is the root", () => {
    expect(bfs(tree, 45)).toBe(true);
  });

  test("returns true when the target exists in the left subtree", () => {
    expect(bfs(tree, 7)).toBe(true);
  });

  test("returns true when the target exists in the right subtree", () => {
    expect(bfs(tree, 50)).toBe(true);
  });

  test("returns false when the target does not exist", () => {
    expect(bfs(tree, 69)).toBe(false);
  });

  test("handles a single-node tree", () => {
    expect(bfs({ value: 10, left: null, right: null }, 10)).toBe(true);
    expect(bfs({ value: 10, left: null, right: null }, 20)).toBe(false);
  });

  test("handles a left-skewed tree", () => {
    const skewedTree = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 3,
          left: null,
          right: null,
        },
        right: null,
      },
      right: null,
    };

    expect(bfs(skewedTree, 3)).toBe(true);
    expect(bfs(skewedTree, 4)).toBe(false);
  });
//   test("visits nodes level by level", () => { wont be able to knwo differns as we are not saving it 
// test("uses breadth-first traversal", () => {
//   const visited: number[] = [];

//   expect(bfs(tree, 70, (value:any) => visited.push(value))).toBe(true);
//   expect(visited).toEqual([45, 7, 60, 3, 12, 50, 70]);
// });
});