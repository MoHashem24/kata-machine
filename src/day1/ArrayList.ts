export default class ArrayList<T> {
    public length: number;
    private data: Array<T>;
    private capacity: number;

    constructor(capacity?: number) {
        this.length = 0;
        this.capacity = capacity || 10;
        this.data = new Array<T>(this.capacity);
    }

    private increaseCapacity() {
        const newData = new Array<T>(this.capacity * 2);
        for (let i = 0; i < this.length; i++) {
            newData[i] = this.data[i];
        }
        this.capacity *= 2;
        this.data = newData;
    }

    insertAt(item: T, idx: number): void {
        if (this.length >= this.capacity) this.increaseCapacity();
        for (let i = this.length; i > idx; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[idx] = item;
        this.length++;
    }

    prepend(item: T): void {
        this.insertAt(item, 0);
    }

    append(item: T): void {
        this.insertAt(item, this.length);
    }

    get(idx: number): T | undefined {
        if (idx >= this.length) return undefined;
        return this.data[idx];
    }

    getIndex(item: T): number {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === item) return i;
        }
        return -1;
    }

    remove(item: T): T | undefined {
        const idx = this.getIndex(item);
        if (idx === -1) return undefined;
        return this.removeAt(idx);
    }

    removeAt(idx: number): T | undefined {
        if (idx >= this.length) return undefined;
        const value = this.data[idx];
        for (let i = idx; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.length--;
        return value;
    }
}
