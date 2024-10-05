export default class Queue<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;

    constructor() {
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode = new Node<T>(item);
        if (!this.length) this.head = newNode;
        else if (this.length === 1) {
            this.head!.next = newNode;
            this.tail = newNode;
        } else {
            const lastNode = this.tail;
            lastNode!.next = newNode;
            this.tail = newNode;
        }
        // else if (this.length === 1) {
        //     this.head!.next = newNode;
        //     this.tail = newNode;
        // } else {
        //     // const oldHead = this.head;
        //     // newNode.next = oldHead;
        //     // this.head = newNode;
        //     // on last node connect
        //     // if (this.tail?.next) this.tail = this.tail!.next;
        //     this.tail = newNode;
        // }
        this.length++;
    }
    deque(): T | undefined {
        if (!this.length) return undefined;
        let currentNodeValue = this.head?.value;
        this.head = this.head!.next;
        this.length--;
        return currentNodeValue;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
class Node<T> {
    public value: T;
    public next: Node<T> | undefined;
    constructor(value: T) {
        this.value = value;
    }
}
