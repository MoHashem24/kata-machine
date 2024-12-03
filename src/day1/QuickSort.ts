// Helper function for QuickSort: partitions the array around a pivot element
function parttion(arr: number[], low: number, high: number): number {
    // Use the last element as the pivot
    let pivot = arr[high];
    // Index to place elements smaller than or equal to the pivot
    let idx = low - 1;

    // Loop through the array from `low` to `high - 1`
    for (let i = low; i < high; i++) {
        // If the current element is less than or equal to the pivot
        if (arr[i] <= pivot) {
            idx++; // Move the partition index
            // Swap the element at `i` with the element at `idx`
            [arr[idx], arr[i]] = [arr[i], arr[idx]];
        }
    }

    // Place the pivot element at its correct position
    idx++;
    [arr[idx], arr[high]] = [arr[high], arr[idx]];
    return idx; // Return the partition index
}

// Recursive QuickSort function
function qs(arr: number[], low: number, high: number): void {
    if (low >= high) return; // Base case: subarray has 0 or 1 elements

    // Partition the array and get the pivot index
    let pivotIndex = parttion(arr, low, high);

    // Recursively sort elements before the pivot
    qs(arr, low, pivotIndex - 1);

    // Recursively sort elements after the pivot
    qs(arr, pivotIndex + 1, high);
}

// Main QuickSort function (entry point)
export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1); // Call the recursive QuickSort function
}