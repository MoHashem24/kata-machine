
export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    let queue: BinaryNode<number>[] = [head];
    while(!!queue.length){
        const node = queue.shift();
        if (node?.value === needle) return true;
        node?.left && queue.push(node.left);
        node?.right && queue.push(node.right);
    }  
    return false;      
}