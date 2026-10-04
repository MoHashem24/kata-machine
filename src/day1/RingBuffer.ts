// Dynamic buffer: full → increase capacity
// Ring buffer: full → overwrite oldest
/**
 * 
 * Fixed ring buffer

Use it when you know the maximum amount of data you want to keep.

Examples:

Last 1000 log messages
Audio/video streaming buffers
Network packet buffers
Sensor readings
Moving averages
Recent events
 */
// Dynamic
// Use it when you want the circular-array benefits, but you don't know the maximum size. , enqueue dequeue like psuh pop O(1) ulike js Array
//General-purpose queues
// Task/job queues



// 8. Test normal push/pop behavior.

// 9. Test `get()` with multiple elements.

// 10. Test the important ring-buffer behavior:
//     - Fill the buffer.
//     - Push another item.
//     - Verify the oldest item was overwritten.

// get
// pop
// push

export default class RingBuffer<T> {
    public length: number;
    public capacity: number;
    public data: Array<T>;
    public head: number;
    public tail: number;

    constructor(capacity?: number) {
           this.length = 0;
        this.capacity = capacity ?? 10;
        this.data = new Array<T>(this.capacity);
        this.head = 0;// head should point to oldest element
        this.tail = this.capacity - 1;// tail to last element
    }

    push(item: T): void {
        // if(this.length === this.capacity) this.increaseCapacity();for Dynamic buffer
        let nextPosition = (this.tail + 1) % this.capacity;
        if (this.length === this.capacity) {
            this.head = (this.head + 1) % this.capacity;
            /**
         * don't increase length
            move head
         * 
         */
        } else {
            this.length++;
        }
        //get next position
        //    if(nextPosition === this.head && this.length === this.capacity){} no need as length check
        this.tail = nextPosition;
        this.data[this.tail] = item;
    }
    pop(): T | undefined {
        if (this.length === 0) return undefined;
        const value = this.data[this.head]; // Special Queue / Circular Queue FIFO
        this.head = (this.head + 1) % this.capacity;
        this.length--;
        return value;
    }
    // 7. Implement `get(index)`:
//    - Validate the logical index.
//    - Convert the logical index to the physical array index.
//    - Use circular indexing: `(head + index) % capacity`.
//    - Return the element.
    get(index: number): T | undefined {
        if (index < 0 || index >= this.length || this.length ===0) return undefined;
        const physicalIndex = (this.head + index) % this.capacity;
        return this.data[physicalIndex];
    }
    // private increaseCapacity() {
    //     this.capacity *= 2;
    //     const newData = new Array<T>(this.capacity);
    //     this.head = this.head % this.capacity;
    //     this.head = this.tail;
    //     for (let i = this.head; i < this.length; i++) {
    //         newData[i] = this.data[i];
    //     }
    //     this.data = newData;
    // }
}
