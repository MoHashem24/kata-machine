function walk(head: BinaryNode<number>, paths: number[]): number[] {
    if (head === null) return [];

    head.left && walk(head.left, paths);
    paths.push(head.value);
    head.right && walk(head.right, paths);

    return paths;
}
export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
