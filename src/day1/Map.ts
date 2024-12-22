import SinglyLinkedList from "./SinglyLinkedList";

type KeyValuePair<T extends string | number, V> = {
    key: T;
    value: V | undefined;
};

export default class Map<T extends string | number, V> {
    // Implement the Map class here
    capacity: number;
    data: Array<SinglyLinkedList<KeyValuePair<T, V>>>; //array list we will use js array as like array list for now till implement it and apply this Map in LRU after enhancing it
    length: number;
    constructor() {
        this.capacity = 10;
        this.data = new Array(this.capacity);
        this.length = 0;
    }
    private getHash(key: T): number {
        if (typeof key === "string") {
            // let hash = 0;
            // for (let i = 0; i < key.length; i++) {
            //     hash = (hash << 5) - hash + key.charCodeAt(i);
            //     hash = hash & hash;
            // }
            //for simplicity sake we will use below hash
            let hash = 0;
            for (let i = 0; i < key.length; i++) {
                hash += key.charCodeAt(i);
            }
            return hash % this.capacity;
        }
        return +key % this.capacity;
    }
    get(key: T): V | undefined {
        //generate hash
        const hash = this.getHash(key);
        if (!hash) return undefined;
        const linkedList = this.data[hash];
        if (!linkedList) return undefined;
        const _value = linkedList.getObject(
            { key, value: undefined } as KeyValuePair<T, V>,
            (v1: KeyValuePair<T, V>, v2: KeyValuePair<T, V>) =>
                v1.key === v2.key,
        );
        return _value?.value;
    }
    private increaseSize() {
        const newCapacity = this.capacity * 2;
        const newData = new Array(newCapacity);
        // for(let i=0;i<this.capacity;i++){
        //     newData[i] = this.data[i];
        // } or simply use ...
        newData.push(...this.data);
        this.capacity = newCapacity;
        this.data = newData;
    }
    set(key: T, value: V): void {
        const hash = this.getHash(key);
        if (!hash) return;
        if (hash >= this.capacity) this.increaseSize();
        let linkedList = this.data[hash];
        if (!linkedList) {
            linkedList = new SinglyLinkedList<KeyValuePair<T, V>>();
            this.data[hash] = linkedList;
        }
        //if exists update
        const _currValue = this.get(key);
        if (!_currValue) {
            linkedList.append({ key, value });
            this.length++;
        } else {
            const item = linkedList.getObject(
                { key, value: undefined } as KeyValuePair<T, V>,
                (v1: KeyValuePair<T, V>, v2: KeyValuePair<T, V>) =>
                    v1.key === v2.key,
            );
            if (item) {
                item.value = value;
            }
        }
    }
    delete(key: T): V | undefined {
        const hash = this.getHash(key);
        if (!hash) return;
        const linkedList = this.data[hash];
        if (!linkedList) return;
        const _value=  linkedList.removeObject(
            { key, value: undefined } as KeyValuePair<T, V>,
            (v1: KeyValuePair<T, V>, v2: KeyValuePair<T, V>) =>
                v1.key === v2.key,
        )?.value;
        if(_value) this.length--;
        return _value;
    }
    size(): number {
        return this.length;
    }
}
