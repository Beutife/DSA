class NonCollisionNode <K, V> {
    key: K;
    value: V;
    next: NonCollisionNode<K, V> | null;


    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
         this.next = null;
        
    }
}

class SimpleHashMap{
    buckets: Array<any>; 
    
        size: number ;

    constructor(){
    this.size = 10; 
    this.buckets = new Array(this.size).fill(null);
    }

    private Hashfunction(key: string | number): number{

      const keyString = String(key)
      let hash = 0;
      for(let i = 0; i<keyString.length; i++){
         hash += keyString.charCodeAt(i);
      }
      const index = hash % this.size;
      return index 
    }

      put(key: K, value: V): void{
        let index = this.Hashfunction(key);
        const node = this.buckets[index]
        if(node == null){
          this.buckets[index] = new NonCollisionNode(key , value)
        }else{
          if(node.key == key){
              node.value = value
          }else{
            throw new Error (`Collision detected at index ${index}. This map does not allow collisions.`);
          }
        }
      }

          get(key: K): V | undefined {
        const keyString = String(key); // Convert key to string
        const index = this.Hashfunction(keyString); // Hash the key
        let currentNode = this.buckets[index]; // Start at the correct bucket index

        while (currentNode !== null) {
          if (currentNode.key === key) {
            return currentNode.value; // Key match found
          }
          currentNode = currentNode.next; // Move to next node in chain
        }

        // If we get here, the key was not found
        return undefined;
      }

      remove(key : K){
        const keyString = String(key)
        const index= this.Hashfunction(keyString)
        let curren = this.buckets[index] 
        let prev: NonCollisionNode<K, V> | null = null;

        while( curren){
          if(curren.key === key){
            if (prev === null){
              this.buckets[index] = curren.next 
            }else{
              prev.next = curren.next
            }
            return true;
          }
          prev = curren;
          curren = curren.next
        }
        return false;
      }


}