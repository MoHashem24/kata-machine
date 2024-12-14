export default class MinHeap {
    public length: number;
    public heap: number[];

    constructor() {
        this.length = 0;
        this.heap = [];
    }

    insert(value: number): void {
        // this.heap.push(value);
        //to keep without use of stack
        this.heap[this.length] = value;
        this.length++;
        this._bubbleUp(this.length - 1);
    }
    delete(): number {
        const out = this.heap[0];
        if (this.length === 0) {
            return -1;
        }

        this.length--;
        if (this.length === 0) {
            // this.heap.pop();
            this.heap = [];
            return out;
        }
        // this._swap(0, this.length); need this.length -1 as out of range now  and you can pop
        this.heap[0] = this.heap[this.length];// this works but swap no 
        // this.heap.pop();
        this._heapifyDown(0);
        return out;
    }

    private _swap(aIndex: number, bIndex: number): void {
        const temp = this.heap[aIndex];
        this.heap[aIndex] = this.heap[bIndex];
        this.heap[bIndex] = temp;
    }
    private _getParent(index: number): number {
        return Math.floor((index - 1) / 2);
    }
    private _bubbleUp(index: number): void {
        if (index === 0) {
            return;
        }
        const parentIndex = this._getParent(index);
        if (parentIndex < 0 || !this.heap[parentIndex] || !this.heap[index])
            return;

        if (this.heap[index] < this.heap[parentIndex]) {
            this._swap(index, parentIndex);
            this._bubbleUp(parentIndex);
        }
    }
    private _getLeftChild(index: number): number {
        return 2 * index + 1;
    }
    private _getRightChild(index: number): number {
        return 2 * index + 2;
    }
    private _heapifyDown(index: number): void {
        if (index === this.length) {
            return;
        }
        const leftChildIndex = this._getLeftChild(index);
        if (leftChildIndex >= this.length) {
            return;
        }
        const rightChildIndex = this._getRightChild(index);
        if (rightChildIndex >= this.length) {
            if (this.heap[leftChildIndex] < this.heap[index]) {
                this._swap(index, leftChildIndex);
                this._heapifyDown(leftChildIndex);
            }
        }
        if (
            this.heap[leftChildIndex] < this.heap[rightChildIndex] &&
            this.heap[leftChildIndex] < this.heap[index]
        ) {
            this._swap(index, leftChildIndex);
            this._heapifyDown(leftChildIndex);
        }
        if (
            this.heap[rightChildIndex] < this.heap[leftChildIndex] &&
            this.heap[rightChildIndex] < this.heap[index]
        ) {
            this._swap(index, rightChildIndex);
            this._heapifyDown(rightChildIndex);
        }
    }
}
