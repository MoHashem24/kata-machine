export default class SinglyLinkedList<T> {
    public length: number;
    public head: Node<T> | undefined;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        const newNode = new Node<T>(item);
        if (!this.length) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        //iterate and change nextnode of elemnt on idx-1 to new element and nextnode of new element to nextnode of idx-1
        if (this.length < idx) return undefined;
        else if (idx === 0 && this.length === 0) {
            this.head = new Node<T>(item);
        } else if (idx === 0) {
            let oldHead = this.head;
            this.head = new Node<T>(item);
            this.head.next = oldHead;
        } else {
            let count = 0;
            let current = this.head;
            let prev = null;
            while (count < idx) {
                prev = current;
                current = current?.next;
                count++;
            }
            let newNode = new Node<T>(item);
            if (prev != null) prev!.next = newNode;
            if (current) newNode!.next = current;
        }
        this.length++;
    }
    append(item: T): void {
        const newNode = new Node<T>(item);
        if (!this.length) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current?.next) {
                current = current.next;
            }
            current!.next = newNode;
        }
        this.length++;
    }
    remove(item: T): T | undefined {
        // get the item
        // if the item is the head , remove it
        //if tail then and change nextnode for node beofre it to null
        //in middle then change nextnode for next node of that element

        if (!this.length) return undefined;
        if (this.head?.value === item) {
            const removedValue = this.head.value;
            this.head = this.head.next;
            this.length--;
            return removedValue;
        }
        let current = this.head;
        let prev: Node<T> | null = null;
        //current exist but not same value or length
        while (current && current.value !== item) {
            prev = current;
            current = current.next;
        }

        if (!current) return undefined;

        prev!.next = current.next;
        this.length--;
        return current.value;
    }
    get(idx: number): T | undefined {
        if (idx >= this.length || idx < 0) return undefined; // Fix bounds check
        let current = this.head;
        for (let i = 0; i < idx; i++) {
            current = current!.next;
        }
        return current!.value;
    }

    removeAt(idx: number): T | undefined {
        if (idx >= this.length || idx < 0) return undefined; // Fix bounds check

        if (idx === 0) {
            const removedValue = this.head!.value;
            this.head = this.head!.next;
            this.length--;
            return removedValue;
        }

        let current = this.head;
        let prev: Node<T> | undefined = undefined;

        for (let i = 0; i < idx; i++) {
            prev = current;
            current = current!.next;
        }

        if (!current) return undefined;
        prev!.next = current!.next;
        this.length--;
        return current.value; //new value at that index
    }
}
class Node<T> {
    public value: T;
    public next: Node<T> | undefined;
    constructor(value: T) {
        this.value = value;
    }
    // constructor(value: T,next: Node<T>) {
    //     this.value = value;
    //     this.next = next;
    // }
}
