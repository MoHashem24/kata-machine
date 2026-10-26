// function walk(head:BinaryNode<number>,needle:number):boolean{
//     if(head === null) return false;
//     if(head.value === needle) return true;
    
//     if(needle > head.value){ 
//         return !!head.right && walk(head.right,needle)
//     }

//     return !!head.left && walk(head.left,needle);
// }
// export default function dfs(head: BinaryNode<number>, needle: number): boolean {
//     return walk(head,needle)
// }
function walk(head: BinaryNode<number>|null, needle: number): boolean{
    if(head === null) return false;
    if(head.value === needle) return true;


    // return walk(head.left,needle) || walk(head.right,needle);//normal DFS
    //ON BST
    if(  head.value < needle) return walk(head.right,needle);
    return walk(head.left,needle)
}
export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return walk(head,needle)
}