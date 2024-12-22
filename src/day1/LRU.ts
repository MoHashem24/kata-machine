class Node<T> {
    public value: T;
    public next: Node<T> | undefined;
    public prev: Node<T> | undefined;
    constructor(value: T) {
        this.value = value;
    }
}

export default class LRU<K, V> {
    private length: number;
    public head: Node<V> | undefined;
    public tail: Node<V> | undefined;
    private lookupCache: Map<K, Node<V>>;
    private reverseLookup: Map<Node<V>, K>;
    private capacity: number;

    constructor(capacity: number) {
        this.length = 0;
        this.capacity = capacity;
        this.lookupCache = new Map();
        this.reverseLookup = new Map();
    }

    update(key: K, value: V): void {
        const node = this.lookupCache.get(key);
        if (node) {
            node.value = value;
            this.deatch(node);
            this.attach(node); //reposition it at start of list
            return;
        }
        const newNode = this.createNode(value);
        this.attach(newNode);
        this.length++;
        this.lookupCache.set(key, newNode);
        this.reverseLookup.set(newNode, key);
        this.trimCache();
    }
    get(key: K): V | undefined {
        if (!this.length) return undefined;
        const node = this.lookupCache.get(key);
        if (!node) return undefined;
        this.deatch(node);
        this.attach(node);
        return node.value;
    }
    private createNode(value: V): Node<V> {
        return new Node(value);
    }
    private deatch(node: Node<V>): void {
        if (!this.head || !this.tail) return;
        if (this.length === 1) {
            this.head = undefined;
            this.tail = undefined;
            return;
        }
        if (node === this.head) {
            this.head = this.head?.next;
            this.head!.prev = undefined;
            return;
        }
        if (node === this.tail) {
            this.tail = this.tail?.prev;
            this.tail!.next = undefined;
            return;
        }
        const curr = node;
        curr.next!.prev = curr.prev;
        curr.prev!.next = curr.next;
    }
    private attach(node: Node<V>): void {
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }

        const head = this.head;
        this.head = node;
        node.next = head;
        head.prev = node;
        if (this.length === 1) {
            this.tail = head;
        }
    }
    private trimCache(): void {
        if (this.length > this.capacity) {
            const tail = this.tail!;
            const key = this.reverseLookup.get(tail);
            this.lookupCache.delete(key!); //we used reverse lookup to get key here from node so no need to send anything
            this.reverseLookup.delete(tail);
            this.deatch(tail);
            this.length--;
        }
    }
}
