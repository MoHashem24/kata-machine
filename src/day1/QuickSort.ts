 function qs(arr: number[], low: number, high: number): void {
 if(low >= high) return;
 let pivotIndex = parttion(arr, low, high);
 //pivotIndex is excluded as already done in parttion
 qs(arr, low,pivotIndex-1);
 qs(arr, pivotIndex+1, high);
}
function parttion(arr: number[], low: number, high: number): number {
    let pivot = arr[high];
    let idx = low -1;
    for(let i = low; i < high; i++){
       
        //swap if i < pivot
        if(arr[i] <= pivot){
            idx++;// move pivot index if swaapped already and smaller 
            [arr[idx], arr[i]] = [arr[i], arr[idx]];
        }
    }
    //swap pivot with idx
    ++idx;
    [arr[idx], arr[high]] = [arr[high], arr[idx]];
    return idx;
}
export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length-1);
}