class ListNode<k, v>{
    key: k;
    value: v;
    next: ListNode<k, v> | null;

    constructor(key: k, value: v) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashMap<k, v> {
    private buckets: Array<ListNode<k, v> | null>;
    private size: number;

    constructor(size: number = 10) {
        this.buckets = new Array(size).fill(null)
        this.size = size;
    }

    private hash(key: k): number {
        const keyString = String(key);
        let hash = 0;
        for(let i = 0; i < keyString.length; i++) {
            hash = (hash + keyString.charCodeAt(i)) % this.size;
        }
        return hash;
    }

    set(key : k, value: v): void {
        const index = this.hash(key);
        let node = this.buckets[index];

        if (!node) {
            this.buckets[index] = new ListNode(key, value);
            return;
        }

        while (node) {
            if (node.key === key) {
                node.value = value; // Update existing key
                return;
            }
            if (!node.next) {
                node.next = new ListNode(key, value); // Add new key
                return;
            }
            node = node.next;
        }
    }

    get(key: k): v | null {
        const index = this.hash(key);
        let node = this.buckets[index];

        while (node) {
            if (node.key === key) {
                return node.value; // Return value if key matches
            }
            node = node.next;
        }
        return null; // Key not found
    }

    remove(key: k): void {
        const index = this.hash(key);
        let node = this.buckets[index];
        let prev: ListNode<k, v> | null = null;

        while (node) {
            if (node.key === key) {
                if (prev) {
                    prev.next = node.next; // Remove node from the chain
                } else {
                    this.buckets[index] = node.next; // Remove head node
                }
                return;
            }
            prev = node;
            node = node.next;
        }
    }
}