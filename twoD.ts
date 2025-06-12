class DynamicArray{
    private bucket: number[][];
    private lastAnswer: number;
    private results: number[];
    

    constructor( private n: number, public queries:number[][]){
         this.bucket = [];
         for(let i=0; i < n; i++){
           this.bucket.push([])
         }
         this.lastAnswer = 0;
         this.results = [];
         this.queries = queries;
    }

    runQuery():any{
      
        for (const query of this.queries) {
            const [type, x, y] = query;
            const index = (x ^ this.lastAnswer) % this.n;

            if(type === 1) {
                // Type 1: Append y to the selected bucket
                this.bucket[index].push(y);
               }else if(type === 2){
                 const size = this.bucket[index].length;
                const value = this.bucket[index][y % size];
                this.lastAnswer = value;
                this.results.push(value);
             }
        }
       return this.results; 
}

}

const queries = [
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1]
];

const dynArray = new DynamicArray(2, queries);
console.log(dynArray.runQuery());