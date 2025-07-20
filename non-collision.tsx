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
   // so i dont know how to specify the number 
    buckets: Array<any>; // i want to believe this stops the dictionary?, whic i beleive 
               // it'sand object key : value, so we're tostore the map in an array?? is that it
    size: number ;// i guess its like this

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



}