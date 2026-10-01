// export default class SinglyLinkedList<T> {
//     public length: number;
//     public head: Node<T> | undefined;

//     constructor() {
//         this.length = 0;
//     }

//     prepend(item: T): void {
//         const newNode = new Node<T>(item);
//         if (!this.length) {
//             this.head = newNode;
//         } else {
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.length++;
//     }
//     insertAt(item: T, idx: number): void {
//         //iterate and change nextnode of elemnt on idx-1 to new element and nextnode of new element to nextnode of idx-1
//         if (this.length < idx) return undefined;
//         else if (idx === 0 && this.length === 0) {
//             this.head = new Node<T>(item);
//         } else if (idx === 0) {
//             let oldHead = this.head;
//             this.head = new Node<T>(item);
//             this.head.next = oldHead;
//         } else {
//             let count = 0;
//             let current = this.head;
//             let prev = null;
//             while (count < idx) {
//                 prev = current;
//                 current = current?.next;
//                 count++;
//             }
//             let newNode = new Node<T>(item);
//             if (prev != null) prev!.next = newNode;
//             if (current) newNode!.next = current;
//         }
//         this.length++;
//     }
//     append(item: T): void {
//         const newNode = new Node<T>(item);
//         if (!this.length) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while (current?.next) {
//                 current = current.next;
//             }
//             current!.next = newNode;
//         }
//         this.length++;
//     }
//     removeObject(item: T, isEqual: (v1: T, v2: T) => boolean): T | undefined {
//         // get the item
//         // if the item is the head , remove it
//         //if tail then and change nextnode for node beofre it to null
//         //in middle then change nextnode for next node of that element

//         if (!this.length) return undefined;
//         if (isEqual(this.head!.value, item)) {
//             const removedValue = this.head!.value;
//             this.head = this.head!.next;
//             this.length--;
//             return removedValue;
//         }
//         let current = this.head;
//         let prev: Node<T> | null = null;
//         //current exist but not same value or length
//         while (current && !isEqual(current.value, item)) {
//             prev = current;
//             current = current.next;
//         }

//         if (!current) return undefined;

//         prev!.next = current.next;
//         this.length--;
//         return current.value;
//     }
//     remove(item: T): T | undefined {
//         // get the item
//         // if the item is the head , remove it
//         //if tail then and change nextnode for node beofre it to null
//         //in middle then change nextnode for next node of that element

//         if (!this.length) return undefined;
//         if (this.head?.value === item) {
//             const removedValue = this.head.value;
//             this.head = this.head.next;
//             this.length--;
//             return removedValue;
//         }
//         let current = this.head;
//         let prev: Node<T> | null = null;
//         //current exist but not same value or length
//         while (current && current.value !== item) {
//             prev = current;
//             current = current.next;
//         }

//         if (!current) return undefined;

//         prev!.next = current.next;
//         this.length--;
//         return current.value;
//     }
//     get(idx: number): T | undefined {
//         if (idx >= this.length || idx < 0) return undefined; // Fix bounds check
//         let current = this.head;
//         for (let i = 0; i < idx; i++) {
//             current = current!.next;
//         }
//         return current!.value;
//     }
//     getObject(value: T, isEqual: (v1: T, v2: T) => boolean): T | undefined {
//         if (!value) return undefined;
//         let current = this.head;
//         while (current && !isEqual(value, current.value)) {
//             current = current!.next;
//         }
//         return current?.value;
//     }

//     removeAt(idx: number): T | undefined {
//         if (idx >= this.length || idx < 0) return undefined; // Fix bounds check

//         if (idx === 0) {
//             const removedValue = this.head!.value;
//             this.head = this.head!.next;
//             this.length--;
//             return removedValue;
//         }

//         let current = this.head;
//         let prev: Node<T> | undefined = undefined;

//         for (let i = 0; i < idx; i++) {
//             prev = current;
//             current = current!.next;
//         }

//         if (!current) return undefined;
//         prev!.next = current!.next;
//         this.length--;
//         return current.value; //new value at that index
//     }
// }

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
export default class SinglyLinkedList<T> {
    public length: number;
    public head: Node<T> | undefined;
    public tail: Node<T> | undefined;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        const newNode = new Node<T>(item);
        newNode.next = this.head;
        this.head = newNode;
        if (this.length === 0) {
            this.tail = newNode;
        }
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) return undefined;

        // if (idx === 0 || this.length === 0) {
        //     newNode.next = this.head;
        //     this.head = newNode;
        //     if (this.length === 0) {
        //         this.tail = newNode;
        //     }
        //     this.length++;
        //     return;
        // }
        if (idx === 0) {
            this.prepend(item);
            return;
        }

        if (idx === this.length) {
            this.append(item);
            return;
        }
        let current: Node<T> | undefined = this.head;
        let previous: Node<T> | undefined;
        let count = 0;
        let newNode = new Node<T>(item);
        while (current) {
            if (count === idx) {
                previous!.next = newNode;
                newNode.next = current;
                this.length++;
                return;
            }
            previous = current;
            current = current.next;
            count++;
        }
    }
    append(item: T): void {
        const newNode = new Node<T>(item);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    remove(value: T): T | undefined {
        if (!this.head || value === undefined) return undefined;
        let current: Node<T> | undefined = this.head;
        let previous: Node<T> | undefined;
        while (current) {
            if (current.value === value) {
                if (!previous) {
                    this.head = current.next;
                    this.length--;
                    if (this.length === 0) {
                        this.tail = undefined;
                    }
                    return current.value;
                } else {
                    previous!.next = current.next;

                    if (current === this.tail) {
                        this.tail = previous;
                    }
                    this.length--;
                    return current.value;
                }
            } else {
                previous = current;
                current = current.next;
            }
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        if (!this.head) return undefined;
        if (idx < 0 || idx >= this.length) return undefined;
        let current: Node<T> | undefined = this.head;
        let count = 0;
        while (current) {
            if (count === idx) {
                return current.value;
            }
            current = current.next;
            count++;
        }
        return undefined;
    }
    getNode(value: T, isEqual: (v1: T, v2: T) => boolean): Node<T> | undefined {
        if (value === null || value === undefined) return undefined;
        if (!this.head) return undefined;
        let current: Node<T> | undefined = this.head;
        while (current !== undefined && current !== null) {
            if (isEqual(value, current.value)) return current;
            current = current.next;
        }
        return undefined;
    }
    removeAt(idx: number): T | undefined {
        if (!this.head) return undefined;
        if (idx < 0 || idx >= this.length) return undefined;
        let current: Node<T> | undefined = this.head;
        let previous: Node<T> | undefined;
        let count = 0;
        while (current) {
            if (count === idx) {
                if (!previous) {
                    this.head = current.next;
                    this.length--;
                    if (this.length === 0) {
                        this.tail = undefined;
                    }
                    return current.value;
                } else {
                    previous!.next = current.next;
                    if (current === this.tail) {
                        this.tail = previous;
                    }
                    this.length--;
                    return current.value;
                }
            }
            previous = current;
            current = current.next;
            count++;
        }
        return undefined;
    }
}
