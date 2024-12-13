function walk(head: BinaryNode<number>, paths: number[]): number[] {
    if (head === null) return [];

    paths.push(head.value);
    head.left && walk(head.left, paths);
    head.right && walk(head.right, paths);

    return paths;
}
export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}