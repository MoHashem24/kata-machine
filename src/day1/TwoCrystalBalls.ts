// export default function two_crystal_balls(breaks: boolean[]): number {
//     /**
//      * here used break
//      * because we need to find the first floor where the ball breaks
//      * in mid we are checking if the ball breaks or not
//      * but then need to loop all over to know which one it breaks
//      */
//     //assume sorted
//     let jump = Math.floor(Math.sqrt(breaks.length));
//     let i = jump;
//     //loop across all array to find last possible i in sqrt jumps
//     //used ; to skip init
//     for (; i < breaks.length; i += jump) {
//         if (breaks[i]) {
//             break;
//         }
//     }
//     i -= jump;
//     //scan back sqrt n to find the first break
//     for (let j = 0; j < jump && i < breaks.length; i++, j++) {
//         if (breaks[i]) {
//             return i;
//         }
//     }
//     return -1;
// }

export default function two_crystal_balls(breaks: boolean[]): number {
    const jump = Math.floor(Math.sqrt(breaks.length));
    let i = jump;
    const broken = breaks[i] === true;
    while ( i< breaks.length && !broken) {
        i += jump;
    }
    // ah not sqrt of no it is sqrt n + srtn + ... drop constants and it is sqrt N
    for (let j = 0; j < i && j < breaks.length; j++) {
         const broken = breaks[j] === true;
        if (broken) {
            return j;
        }
    }
    return -1;
}
