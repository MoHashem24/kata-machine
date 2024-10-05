export default class Queue<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;

    constructor() {
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode = new Node<T>(item);
        if (!this.length) {
            // For the first element, both head and tail point to the same node
            this.head = this.tail = newNode;
        } else {
            // Append to the tail and update tail
            //next for tail is current last to keep link
            this.tail!.next = newNode;
            //now  last is new
            this.tail = newNode;
        }
        this.length++;
    }
    deque(): T | undefined {
        if (!this.length) return undefined;
        const currentNodeValue = this.head?.value;
        this.head = this.head!.next;
        this.length--;
        //head is tail at start
        if (!this.length) this.tail = this.head = undefined;
        return currentNodeValue;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
class Node<T> {
    public value: T;
    public next?: Node<T>;
    constructor(value: T) {
        this.value = value;
    }
}
