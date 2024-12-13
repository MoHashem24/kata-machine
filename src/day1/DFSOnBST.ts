function walk(head:BinaryNode<number>,needle:number):boolean{
    if(head === null) return false;
    if(head.value === needle) return true;
    
    if(head.left && walk(head.left,needle)) return true;
    if(head.right && walk(head.right,needle)) return true;


    return false;
}
export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return walk(head,needle)
}