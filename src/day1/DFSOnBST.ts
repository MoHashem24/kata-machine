function walk(head:BinaryNode<number>,needle:number):boolean{
    if(head === null) return false;
    if(head.value === needle) return true;
    
    if(needle > head.value){ 
        return !!head.right && walk(head.right,needle)
    }

    return !!head.left && walk(head.left,needle);
}
export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return walk(head,needle)
}