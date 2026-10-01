// export default class DoublyLinkedList<T> {
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
//             if (prev) {
//                 prev!.next = newNode;
//                 newNode.prev = newNode;
//             }
//             if (current) newNode!.next = current;
//         }
//         this.length++;
//     }
//     append(item: T): void {
//         const newNode = new Node<T>(item);
//         if (!this.length) {
//             this.head = newNode;
//         } else {
//             let tailNode = this.head;
//             let prev = null;
//             //TO GO to tail node
//             while (tailNode?.next) {
//                 prev = tailNode;
//                 tailNode = tailNode.next;
//             }
//             if (prev) tailNode!.prev = prev;
//             tailNode!.next = newNode;
//         }
//         this.length++;
//     }
//     remove(item: T): T | undefined {
//         if (!this.length) return undefined;
//         if (this.head?.value === item) {
//             const removedValue = this.head.value;
//             this.head = this.head.next;
//             this.length--;
//             return removedValue;
//         }
//         let selectedNode = this.head;
//         let prev: Node<T> | null = null;
//         //current exist but not same value or length
//         while (selectedNode && selectedNode.value !== item) {
//             prev = selectedNode;
//             selectedNode = selectedNode.next;
//         }

//         if (!selectedNode) return undefined;
//         const removedValue = selectedNode.value;
//         prev!.next = selectedNode.next;
//         selectedNode = selectedNode!.next;
//         if (prev && selectedNode) selectedNode.prev = prev;
//         this.length--;
//         return removedValue;
//     }
//     get(idx: number): T | undefined {
//         if (idx >= this.length || idx < 0) return undefined; // Fix bounds check
//         let current = this.head;
//         for (let i = 0; i < idx; i++) {
//             current = current!.next;
//         }
//         return current!.value;
//     }
//     removeAt(idx: number): T | undefined {
//         if (idx >= this.length || idx < 0 || !this.length) return undefined;

//         if (idx === 0) {
//             const removedValue = this.head!.value;
//             this.head = this.head!.next;
//             this.length--;
//             return removedValue;
//         }

//         let nodeInIndex = this.head;

//         let prev = null;
//         for (let i = 0; i < idx; i++) {
//             prev = nodeInIndex;
//             nodeInIndex = nodeInIndex!.next;
//         }
//         if (!nodeInIndex) return undefined;
//         const _removedValue = nodeInIndex?.value;
//         prev!.next = nodeInIndex!.next;
//         nodeInIndex = nodeInIndex!.next;
//         if (prev && nodeInIndex!.next) nodeInIndex!.prev = prev;
//         this.length--;
//         return _removedValue;
//     }
// }
class Node<T> {
    public value: T;
    public next: Node<T> | undefined;
    public prev: Node<T> | undefined;
    constructor(value: T) {
        this.value = value;
    }
}

export default class DoublyLinkedList<T> {
    public length: number;
    public head: Node<T> | undefined;
    public tail: Node<T> | undefined;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        const newNode = new Node<T>(item);

        newNode.next = this.head;

        if (this.head) {
            this.head.prev = newNode;
        } else {
            this.tail = newNode;
        }

        this.head = newNode;
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
        let count = 0;
        let newNode = new Node<T>(item);
        while (current) {
            if (count === idx) {
                if (current.prev) current.prev!.next = newNode;
                newNode.prev = current.prev;
                newNode.next = current;
                current.prev = newNode;
                this.length++;
                return;
            }
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
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }
    remove(value: T): T | undefined {
        if (!this.head || value === undefined) return undefined;
        let current: Node<T> | undefined = this.head;
        while (current) {
            if (current.value === value) {
                if (!current.prev) {
                    this.head = current.next;
                    if (this.head) this.head!.prev = undefined;
                    this.length--;
                    if (this.length === 0) {
                        this.tail = undefined;
                    }
                    return current.value;
                } else {
                    current.prev!.next = current.next;
                    if (current.next) {
                        current.next.prev = current.prev;
                    }

                    if (current === this.tail) {
                        this.tail = current.prev;
                    }
                    this.length--;
                    return current.value;
                }
            } else {
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
        let count = 0;
        while (current) {
            if (count === idx) {
                if (!current.prev) {
                    this.head = current.next;
                    if (this.head) this.head!.prev = undefined;
                    this.length--;
                    if (this.length === 0) {
                        this.tail = undefined;
                    }
                    return current.value;
                } else {
                    current.prev!.next = current.next;
                    if (current.next) {
                        current.next.prev = current.prev;
                    }

                    if (current === this.tail) {
                        this.tail = current.prev;
                    }
                    this.length--;
                    return current.value;
                }
            }
            current = current.next;
            count++;
        }
        return undefined;
    }
}
