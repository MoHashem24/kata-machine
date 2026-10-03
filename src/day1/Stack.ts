// export default class Stack<T> {
//     public length: number;
//     public head?: Node<T>;
//     //same as Queue but no need fo tail node as works from left to right
//     //used in stack erro r
//     //in pc
//     //FILO
//     constructor() {
//         this.length = 0;
//     }

//     push(item: T): void {
//         const newNode = new Node<T>(item);
//         if (!this.length) {
//             this.head = newNode;
//         } else {
//             // Append to the head and update tail
//             const oldHead = this.head;
//             this.head = newNode;
//             this.head.next = oldHead;
//         }
//         this.length++;
//     }
//     pop(): T | undefined {
//         if (!this.length) return undefined;
//         const currentNodeValue = this.head?.value;
//         this.head = this.head!.next;
//         this.length--;
//         if (!this.length) this.head = undefined;
//         return currentNodeValue;
//     }
//     peek(): T | undefined {
//         return this.head?.value;
//     }
// }
class Node<T> {
    public value: T;
    public prev?: Node<T>;//we called it prev as we are going from right to left in stack
    constructor(value: T) {
        this.value = value;
    }
}
export default class Stack<T> {
    public length: number;
    public head?: Node<T>;

    constructor() {
        this.length = 0;
    }

    push(item: T): void {
        const newNode = new Node<T>(item);
        if (!this.length) {
            this.head = newNode;
            this.length++;
            return;
        }
        // else {
        newNode.prev = this.head;
        this.head = newNode;
        this.length++;
        // }
    }
    pop(): T | undefined {
        if (!this.length) return undefined;
        const out = this.head?.value;
        this.head = this.head!.prev;
        this.length--;
        if (!this.length) this.head = undefined;
        return out;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
