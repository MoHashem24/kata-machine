export default class DoublyLinkedList<T> {
    public length: number;
    public value: any;
    public prev: DoublyLinkedList<T>;
    public next: DoublyLinkedList<T>;

    constructor() {}

    prepend(item: T): void {}
    insertAt(item: T, idx: number): void {}
    append(item: T): void {}
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}
