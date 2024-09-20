export default function two_crystal_balls(breaks: boolean[]): number {
    /**
     * here used break
     * because we need to find the first floor where the ball breaks
     * in mid we are checking if the ball breaks or not
     * but then need to loop all over to know which one it breaks
     */
    //assume sorted
    let jump = Math.floor(Math.sqrt(breaks.length));
    let i = jump;
    //loop across all array to find last possible i in sqrt jumps
    //used ; to skip init
    for (; i < breaks.length; i += jump) {
        if (breaks[i]) {
            break;
        }
    }
    i -= jump;
    //scan back sqrt n to find the first break
    for (let j = 0; j < jump && i < breaks.length; i++, j++) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
