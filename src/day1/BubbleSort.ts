// export default function bubble_sort(arr: number[]): void {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 arr[j] = arr[j] ^ arr[j + 1];
//                 arr[j + 1] = arr[j] ^ arr[j + 1];
//                 arr[j] = arr[j] ^ arr[j + 1];
//             }
//         }
//     }
// }

export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // const temp = arr[j];
                    // arr[j] = arr[j + 1];
                    // arr[j + 1] = temp;
                    // with no temp variable XOR 3 times
                    //input(arr[j] ^ arr[j + 1]) same but different variable to swap values
                    arr[j] = arr[j] ^ arr[j + 1]; //XOR
                    arr[j + 1] = arr[j] ^ arr[j + 1]; //XOR
                    arr[j] = arr[j] ^ arr[j + 1]; //XOR
                }
        }
    }
}
