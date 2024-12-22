export default class ArrayList<T> {
    public length: number;
    data: Array<T>;
    capcity: number;
    //so close to js array(wjat they call array :P )

    constructor(capcity?: number) {
        this.length = 0;
        this.capcity = capcity || 10;
        this.data = new Array<T>(this.capcity);
    }
    private increaseCapacity() {
        const newData = new Array<T>(this.capcity * 2);
        newData.push(...this.data);
        this.capcity *= 2;
        this.data = newData;
    }
    insertAt(item: T, idx: number): void {
        this.length++;
        if (this.length > this.capcity) this.increaseCapacity();
        for (let i = this.length-1; i >idx; i--) {
            this.data[i] = this.data[i-1];
        }
        this.data[idx] = item;
       
    }
    prepend(item: T): void {
        this.insertAt(item, 0);
    }
    append(item: T): void {
        this.insertAt(item, this.length);
    }
    get(idx: number): T | undefined {
        if (idx >= this.length) return undefined;
        return this.data[idx];
    }
    getIndex(item: T): number | -1 {
        if (!item || !this.length) return -1;
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === item) return i;
        }
        return -1;
    }
    remove(item: T): T | undefined {
        const idx = this.getIndex(item);
        if (idx === -1) return undefined;
        return this.removeAt(idx);
    }

    removeAt(idx: number): T | undefined {
        if (idx >= this.length) return undefined;
        if (this.length === 1) {
            this.length = 0;
            const value = this.data[0];
            this.data = new Array<T>(this.capcity);
            return value;
        }
        let value = undefined;
        for (let i = idx; i < this.length; i++) {
            if (i === idx) value = this.data[i];
            this.data[i] = this.data[i + 1];
        }
        this.length--;
        return value;
    }
}
