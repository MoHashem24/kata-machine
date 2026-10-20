
// export default function bfs(head: BinaryNode<number>, needle: number): boolean {
//     let queue: BinaryNode<number>[] = [head];
//     while(!!queue.length){
//         const node = queue.shift();
//         if (node?.value === needle) return true;
//         node?.left && queue.push(node.left);
//         node?.right && queue.push(node.right);
//     }  
//     return false;      
// }



export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    if(head === null || needle == null) return false;
    let queue :BinaryNode<number>[]= [];
    queue.unshift(head); 
    while(!!queue.length){
        const current = queue.shift();

        if(current?.value === needle) return true;
        if(current?.left) queue.push(current?.left);
        if(current?.right) queue.push(current?.right);

        // no binary search tree to choose left or right, so we have to check both sides
        // this DFS as it goes 1 level down till it ends
        // if(current.left !== null && bfs(current.left, needle)) return true;
        // if(current.right !== null && bfs(current.right, needle)) return true;
        
    }
        
    return false;
}