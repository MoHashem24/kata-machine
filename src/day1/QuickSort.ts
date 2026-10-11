// // Helper function for QuickSort: partitions the array around a pivot element
// function parttion(arr: number[], low: number, high: number): number {
//     // Use the last element as the pivot
//     let pivot = arr[high];
//     // Index to place elements smaller than or equal to the pivot
//     let idx = low - 1;

//     // Loop through the array from `low` to `high - 1`
//     for (let i = low; i < high; i++) {
//         // If the current element is less than or equal to the pivot
//         if (arr[i] <= pivot) {
//             idx++; // Move the partition index
//             // Swap the element at `i` with the element at `idx`
//             [arr[idx], arr[i]] = [arr[i], arr[idx]];
//         }
//     }

//     // Place the pivot element at its correct position
//     idx++;
//     [arr[idx], arr[high]] = [arr[high], arr[idx]];
//     return idx; // Return the partition index
// }

// // Recursive QuickSort function
// function qs(arr: number[], low: number, high: number): void {
//     if (low >= high) return; // Base case: subarray has 0 or 1 elements

//     // Partition the array and get the pivot index
//     let pivotIndex = parttion(arr, low, high);

//     // Recursively sort elements before the pivot
//     qs(arr, low, pivotIndex - 1);

//     // Recursively sort elements after the pivot
//     qs(arr, pivotIndex + 1, high);
// }

// // Main QuickSort function (entry point)
// export default function quick_sort(arr: number[]): void {
//     qs(arr, 0, arr.length - 1); // Call the recursive QuickSort function
// }

function partition(arr: number[], low: number, high: number): number {
    let pivot = arr[high];
    let idx = low - 1;
    //put pivot as last element and move all smaller elements to the left of pivot
    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            // if reverse  order it will stay same
            idx++;
            [arr[idx], arr[i]] = [arr[i], arr[idx]];
        }
    }
    idx++;
    // [arr[idx], arr[high]] = [arr[high], arr[idx]];
    // The traditional equivalent is to  place new pivot as last element 
    const temp = arr[idx];
    arr[idx] = arr[high];
    arr[high] = temp;
    return idx;
}
function walk(arr: number[], low: number, high: number): void {
    //base case 2 elements atleast 
    if (low >= high) return;
    const  pivot = partition(arr, low, high);
    walk(arr, low, pivot - 1);
    walk(arr, pivot + 1, high);
}
export default function quick_sort(arr: number[]): void {
    //partition and return the pivot index to recursively sort the left and right subarrays
    walk(arr, 0, arr.length - 1);
}
