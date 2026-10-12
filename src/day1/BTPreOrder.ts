// function walk(head: BinaryNode<number>, paths: number[]): number[] {
//     if (head === null) return [];

//     paths.push(head.value);
//     head.left && walk(head.left, paths);
//     head.right && walk(head.right, paths);

//     return paths;
// }
// export default function pre_order_search(head: BinaryNode<number>): number[] {
//     return walk(head, []);
// }

function walk(node: BinaryNode<number> | null, paths: number[]) {
    if (node === null) return paths; //leave
    paths.push(node.value);

    // if(node.left === null && node.right === null) return paths; as stops if null
    walk(node.left, paths);
    walk(node.right, paths);

    return paths;
}
export default function pre_order_search(head: BinaryNode<number>): number[] {
    // const paths: number[] = [];
    return walk(head, []);
}
