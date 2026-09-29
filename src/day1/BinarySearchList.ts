// export default function bs_list(haystack: number[], needle: number): boolean {
//     let l = 0;
//     let h = haystack.length;
//     do {
//         let m = Math.floor(l + (h - l) / 2); //l-h is called offset
//         let v = haystack[m];
//         if (v === needle) {
//             return true;
//         } else if (v > needle) {
//             h = m; //go to right side
//         } else {
//             l = m + 1;
//         }
//     } while (l < h);
//     return false;
// }
export default function bs_list(haystack: number[], needle: number): boolean {
    let l=0;
    let h=haystack.length;
    do {
     const m = Math.floor( l + (h-l)/2);
     const v = haystack[m];
     if (needle === v  ) {
        return true;
     } else if ( needle > v ) {
        l = m +1;
     }else{
        h = m;
     }
    } while (l < h);
    return false;
}
