class OneDarray{
    //task is to reverse an array of integers.

    array: number[];

    constructor(arrayOne:number[]){
        this.array = arrayOne;
    }

    reverseArray(callback :(value: number, index: number, array:number[] )=>void){
       let i;
       for(let i = this.array.length - 1; i >= 0; i--){
        console.log(callback(this.array[i], i, []))
       }
    }
}
const arr = new OneDarray([5,4,3,2,1])
arr.reverseArray((value, index, array)=>{
  console.log(`${value}, ${index}, ${array}`)
});
console.log(arr)
console.log(arr.array)