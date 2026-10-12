// function walk(head: BinaryNode<number>, paths: number[]): number[] {
//     if (head === null) return [];

//     head.left && walk(head.left, paths);
//     head.right && walk(head.right, paths);
//     paths.push(head.value);

//     return paths;
// }
// export default function post_order_search(head: BinaryNode<number>): number[] {
//     return walk(head, []);
// }


function walk(node: BinaryNode<number> | null, paths: number[]) {
    if (node === null) return paths; //leave
   

    walk(node.left, paths);
    walk(node.right, paths);
    paths.push(node.value);

    return paths;
}
export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}