// export default class ArrayList<T> {
//     public length: number;
//     private data: Array<T>;
//     private capacity: number;

//     constructor(capacity?: number) {
//         this.length = 0;
//         this.capacity = capacity || 10;
//         this.data = new Array<T>(this.capacity);
//     }

//     private increaseCapacity() {
//         const newData = new Array<T>(this.capacity * 2);
//         for (let i = 0; i < this.length; i++) {
//             newData[i] = this.data[i];
//         }
//         this.capacity *= 2;
//         this.data = newData;
//     }

//     insertAt(item: T, idx: number): void {
//         if (this.length >= this.capacity) this.increaseCapacity();
//         for (let i = this.length; i > idx; i--) {
//             this.data[i] = this.data[i - 1];
//         }
//         this.data[idx] = item;
//         this.length++;
//     }

//     prepend(item: T): void {
//         this.insertAt(item, 0);
//     }

//     append(item: T): void {
//         this.insertAt(item, this.length);
//     }

//     get(idx: number): T | undefined {
//         if (idx >= this.length) return undefined;
//         return this.data[idx];
//     }

//     getIndex(item: T): number {
//         for (let i = 0; i < this.length; i++) {
//             if (this.data[i] === item) return i;
//         }
//         return -1;
//     }

//     remove(item: T): T | undefined {
//         const idx = this.getIndex(item);
//         if (idx === -1) return undefined;
//         return this.removeAt(idx);
//     }

//     removeAt(idx: number): T | undefined {
//         if (idx >= this.length) return undefined;
//         const value = this.data[idx];
//         for (let i = idx; i < this.length - 1; i++) {
//             this.data[i] = this.data[i + 1];
//         }
//         this.length--;
//         return value;
//     }
// }

export default class ArrayList<T> {
    public length: number;
    public capacity: number;
    public data: Array<T>;

    constructor(capacity?: number) {
        this.length = 0;
        this.capacity = capacity ?? 10;
        this.data = new Array<T>(this.capacity);
    }

    prepend(item: T): void {
        if (this.length >= this.capacity) this.increaseCapacity();
        this.shiftElementsToRight(0);
        this.data[0] = item;
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        if (this.length >= this.capacity) this.increaseCapacity();
        this.shiftElementsToRight(idx);
        this.data[idx] = item;
        this.length++;
    }
    append(item: T): void {
        if (this.length >= this.capacity) this.increaseCapacity();
        this.data[this.length] = item;
        this.length++;
    }
    remove(item: T): T | undefined {
        //if super efficient memory we reduce array size
        const idx = this.find(item);
        if (idx === -1 || idx>= this.length) return undefined;
        this.shiftElementsToLeft(idx);
        this.data[this.length] = undefined as unknown as T;
        this.length--;

        return item;
    }
    get(idx: number): T | undefined {
     if (idx === -1 || idx>= this.length) return undefined;
        return this.data[idx];
    }
    find(item: T): number {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === item) return i;
        }
        return -1;
    }
    removeAt(idx: number): T | undefined {
    if (idx === -1 || idx>= this.length) return undefined;
        const out = this.data[idx];
        this.shiftElementsToLeft(idx);
        this.data[this.length] = undefined as unknown as T;
        this.length--;
        return out;
    }
    private shiftElementsToLeft(idx: number): void {
        for (let i = idx; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
    }
    private shiftElementsToRight(idx: number): void {
        for (let i = this.length; i > idx; i--) {
            this.data[i] = this.data[i - 1];
        }
    }

    private increaseCapacity() {
        this.capacity *= 2;
        const newData = new Array<T>(this.capacity);
        for (let i = 0; i < this.length; i++) {
            newData[i] = this.data[i];
        }
        this.data = newData;
    }
}
